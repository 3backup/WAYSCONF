#!/usr/bin/env node
/**
 * Import projects from a Webflow collection into Supabase/Postgres project tables.
 *
 * Default mode is DRY RUN. Add --apply to write to DB.
 *
 * Example:
 *   node apps/api/scripts/import-webflow-collection-to-supabase.mjs \
 *     --collection-id 6846a22a95d3c778d528d063 \
 *     --edition 2023 \
 *     --year 2023 \
 *     --apply
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pg from "pg";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "../../..");

function parseArgs(argv) {
  const out = {};
  for (let i = 2; i < argv.length; i++) {
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const next = argv[i + 1];
    if (next && !next.startsWith("--")) {
      out[key] = next;
      i += 1;
    } else {
      out[key] = true;
    }
  }
  return out;
}

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const raw = fs.readFileSync(filePath, "utf-8");
  for (const line of raw.split("\n")) {
    const m = line.match(/^([^#=][^=]*)=(.*)$/);
    if (!m) continue;
    const key = m[1].trim();
    const val = m[2].trim().replace(/^"|"$/g, "");
    if (!process.env[key]) process.env[key] = val;
  }
}

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]+/g, "");
}

function slugify(value, fallback = "project") {
  const normalized = normalizeText(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 140);
  return normalized || fallback;
}

function asString(value, fallback = "") {
  if (value == null) return fallback;
  return String(value);
}

function nullableString(value) {
  if (value == null) return null;
  const s = String(value).trim();
  return s.length ? s : null;
}

function asImageUrl(value) {
  if (!value) return null;
  if (typeof value === "string") return nullableString(value);
  if (typeof value === "object" && value.url) return nullableString(value.url);
  return null;
}

function detectCommercial(value) {
  const text = asString(value, "").toLowerCase();
  if (!text) return false;
  if (text.includes("student")) return false;
  return text.includes("commercial");
}

function pickLink(fieldData) {
  return (
    nullableString(fieldData["link-to-case-study"]) ??
    nullableString(fieldData["link-to-case-study-plain"]) ??
    null
  );
}

async function fetchCollectionItems(collectionId, token) {
  const headers = {
    Authorization: `Bearer ${token}`,
    accept: "application/json",
  };

  const all = [];
  let offset = 0;
  const limit = 100;

  while (true) {
    const url = `https://api.webflow.com/v2/collections/${collectionId}/items/live?limit=${limit}&offset=${offset}`;
    const res = await fetch(url, { headers });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`Webflow items request failed (${res.status}): ${body}`);
    }
    const payload = await res.json();
    const items = Array.isArray(payload.items) ? payload.items : [];
    all.push(...items);
    if (items.length < limit) break;
    offset += limit;
  }

  return all;
}

function buildProjectDraft(item, edition, year) {
  const fd = item.fieldData ?? {};
  const externalId = asString(item.id);
  const name =
    nullableString(fd.name) ??
    nullableString(fd["title-of-the-project"]) ??
    `Project ${externalId}`;
  const slug = slugify(
    nullableString(fd.slug) ?? name,
    `project-${externalId.slice(0, 8)}`
  );
  const description = asString(fd.description, "");
  const caseStudy = asString(fd.casestudy, "");
  const email =
    nullableString(fd.contactpersonemail) ??
    `import-${externalId.slice(0, 12)}@waysawards.local`;
  const tools = asString(fd["tools-and-framework"], "");
  const team = asString(fd.team, "");
  const whyYou = asString(fd["why-you"], "");

  return {
    externalId,
    createdAt: item.createdOn ?? new Date().toISOString(),
    name,
    description,
    excerpt: nullableString(description),
    slug,
    isArchived: false,
    isDraft: false,
    contactPersonEmail: email,
    linkPrimaryRichText: nullableString(fd["link-primary-rich-text"]),
    isCommercial: detectCommercial(fd["student-or-commercial"]),
    linkToCaseStudyPlain: nullableString(fd["link-to-case-study-plain"]),
    clientName: nullableString(fd.clientname),
    toolsAndFramework: tools,
    caseStudy,
    clientTimePeriod: nullableString(fd.clienttimeperiod),
    organisation: nullableString(fd.organisation),
    titleOfTheProject: nullableString(fd["title-of-the-project"]),
    services: nullableString(fd.services),
    contactPersonNumber: nullableString(fd.contactpersonnumber),
    thumbnailUrl: asImageUrl(fd.thumbnail),
    thumbnailUrlSecondary: null,
    thumbnailUrlThird: null,
    year: String(year),
    team,
    linkRichText: nullableString(fd["link-rich-text"]),
    whyYou,
    linkToCaseStudy: pickLink(fd),
    edition,
    categoryExternalIds: Array.isArray(fd["category-project"])
      ? fd["category-project"].map((v) => asString(v)).filter(Boolean)
      : [],
  };
}

function resolveUniqueSlug(baseSlug, takenSlugs, edition) {
  let candidate = baseSlug;
  if (!takenSlugs.has(candidate)) {
    takenSlugs.add(candidate);
    return candidate;
  }

  candidate = `${baseSlug}-${edition}`;
  if (!takenSlugs.has(candidate)) {
    takenSlugs.add(candidate);
    return candidate;
  }

  let idx = 2;
  while (takenSlugs.has(`${candidate}-${idx}`)) idx += 1;
  const finalSlug = `${candidate}-${idx}`;
  takenSlugs.add(finalSlug);
  return finalSlug;
}

async function main() {
  const args = parseArgs(process.argv);
  const collectionId = asString(args["collection-id"] ?? "");
  const edition = Number(args.edition ?? 2023);
  const year = Number(args.year ?? edition);
  const apply = Boolean(args.apply);

  if (!collectionId) {
    console.error("Missing --collection-id");
    process.exit(1);
  }

  loadEnvFile(path.join(ROOT_DIR, "apps/api/.env"));
  loadEnvFile(path.join(ROOT_DIR, "apps/ways-awards/.env"));

  const DATABASE_URL = process.env.DATABASE_URL;
  const WEBFLOW_TOKEN =
    process.env.WEBFLOW_CMS_API_TOKEN ?? process.env.WEBFLOW_SITE_API_TOKEN;

  if (!DATABASE_URL) {
    console.error("Missing DATABASE_URL");
    process.exit(1);
  }
  if (!WEBFLOW_TOKEN) {
    console.error("Missing WEBFLOW_CMS_API_TOKEN / WEBFLOW_SITE_API_TOKEN");
    process.exit(1);
  }

  const items = await fetchCollectionItems(collectionId, WEBFLOW_TOKEN);
  const drafts = items.map((item) => buildProjectDraft(item, edition, year));

  const client = new pg.Client({ connectionString: DATABASE_URL });
  await client.connect();

  try {
    const existingByExternal = new Map();
    const existingRes = await client.query(
      `SELECT id, "externalId", slug, edition
       FROM project
       WHERE "externalId" = ANY($1::text[])`,
      [drafts.map((d) => d.externalId)]
    );
    for (const row of existingRes.rows) {
      existingByExternal.set(String(row.externalId), row);
    }

    const allSlugRows = await client.query(`SELECT slug, "externalId" FROM project`);
    const takenSlugs = new Set(allSlugRows.rows.map((r) => String(r.slug)));

    const categoryRows = await client.query(
      `SELECT id, "externalId" FROM category WHERE "externalId" IS NOT NULL`
    );
    const categoryByExternalId = new Map(
      categoryRows.rows.map((row) => [String(row.externalId), String(row.id)])
    );

    let insertCount = 0;
    let updateCount = 0;
    let reusedCount = 0;
    let slugCollisionCount = 0;
    const missingCategoryRefs = new Set();

    const resolved = drafts.map((draft) => {
      const existing = existingByExternal.get(draft.externalId);
      let slug = draft.slug;
      if (existing) {
        slug = String(existing.slug);
        reusedCount += 1;
        updateCount += 1;
      } else {
        const unique = resolveUniqueSlug(slug, takenSlugs, edition);
        if (unique !== slug) slugCollisionCount += 1;
        slug = unique;
        insertCount += 1;
      }

      const categoryIds = [];
      for (const ext of draft.categoryExternalIds) {
        const cid = categoryByExternalId.get(ext);
        if (!cid) {
          missingCategoryRefs.add(ext);
          continue;
        }
        categoryIds.push(cid);
      }

      return {
        ...draft,
        slug,
        existingId: existing ? String(existing.id) : null,
        categoryIds,
      };
    });

    console.log(
      JSON.stringify(
        {
          mode: apply ? "apply" : "dry-run",
          collectionId,
          edition,
          year: String(year),
          totalFromWebflow: drafts.length,
          insertCount,
          updateCount,
          reusedByExternalId: reusedCount,
          slugCollisionCount,
          missingCategoryRefs: Array.from(missingCategoryRefs),
          missingCategoryRefsCount: missingCategoryRefs.size,
        },
        null,
        2
      )
    );

    if (!apply) return;

    await client.query("BEGIN");
    try {
      const projectIdByExternalId = new Map();

      for (const row of resolved) {
        if (row.existingId) {
          await client.query(
            `UPDATE project SET
              "createdAt" = $2::timestamptz,
              "name" = $3,
              "description" = $4,
              "excerpt" = $5,
              "slug" = $6,
              "isArchived" = $7,
              "isDraft" = $8,
              "contactPersonEmail" = $9,
              "linkPrimaryRichText" = $10,
              "isCommercial" = $11,
              "linkToCaseStudyPlain" = $12,
              "clientName" = $13,
              "toolsAndFramework" = $14,
              "caseStudy" = $15,
              "clientTimePeriod" = $16,
              "organisation" = $17,
              "titleOfTheProject" = $18,
              "services" = $19,
              "contactPersonNumber" = $20,
              "thumbnailUrl" = $21,
              "thumbnailUrlSecondary" = $22,
              "thumbnailUrlThird" = $23,
              "year" = $24,
              "team" = $25,
              "linkRichText" = $26,
              "whyYou" = $27,
              "linkToCaseStudy" = $28,
              "edition" = $29
             WHERE id = $1::uuid`,
            [
              row.existingId,
              row.createdAt,
              row.name,
              row.description,
              row.excerpt,
              row.slug,
              row.isArchived,
              row.isDraft,
              row.contactPersonEmail,
              row.linkPrimaryRichText,
              row.isCommercial,
              row.linkToCaseStudyPlain,
              row.clientName,
              row.toolsAndFramework,
              row.caseStudy,
              row.clientTimePeriod,
              row.organisation,
              row.titleOfTheProject,
              row.services,
              row.contactPersonNumber,
              row.thumbnailUrl,
              row.thumbnailUrlSecondary,
              row.thumbnailUrlThird,
              row.year,
              row.team,
              row.linkRichText,
              row.whyYou,
              row.linkToCaseStudy,
              row.edition,
            ]
          );
          projectIdByExternalId.set(row.externalId, row.existingId);
        } else {
          const insertRes = await client.query(
            `INSERT INTO project (
              "createdAt", "externalId", "name", "description", "excerpt", "slug",
              "isArchived", "isDraft", "contactPersonEmail", "linkPrimaryRichText",
              "isCommercial", "linkToCaseStudyPlain", "clientName", "toolsAndFramework",
              "caseStudy", "clientTimePeriod", "organisation", "titleOfTheProject",
              "services", "contactPersonNumber", "thumbnailUrl", "thumbnailUrlSecondary",
              "thumbnailUrlThird", "year", "team", "linkRichText", "whyYou",
              "linkToCaseStudy", "edition"
            ) VALUES (
              $1::timestamptz, $2, $3, $4, $5, $6,
              $7, $8, $9, $10,
              $11, $12, $13, $14,
              $15, $16, $17, $18,
              $19, $20, $21, $22,
              $23, $24, $25, $26, $27,
              $28, $29
            )
            RETURNING id`,
            [
              row.createdAt,
              row.externalId,
              row.name,
              row.description,
              row.excerpt,
              row.slug,
              row.isArchived,
              row.isDraft,
              row.contactPersonEmail,
              row.linkPrimaryRichText,
              row.isCommercial,
              row.linkToCaseStudyPlain,
              row.clientName,
              row.toolsAndFramework,
              row.caseStudy,
              row.clientTimePeriod,
              row.organisation,
              row.titleOfTheProject,
              row.services,
              row.contactPersonNumber,
              row.thumbnailUrl,
              row.thumbnailUrlSecondary,
              row.thumbnailUrlThird,
              row.year,
              row.team,
              row.linkRichText,
              row.whyYou,
              row.linkToCaseStudy,
              row.edition,
            ]
          );
          projectIdByExternalId.set(row.externalId, insertRes.rows[0].id);
        }
      }

      for (const row of resolved) {
        const projectId = projectIdByExternalId.get(row.externalId);
        if (!projectId) continue;

        await client.query(
          `DELETE FROM project_categories_category WHERE "projectId" = $1::uuid`,
          [projectId]
        );

        for (const categoryId of row.categoryIds) {
          await client.query(
            `INSERT INTO project_categories_category ("projectId", "categoryId")
             VALUES ($1::uuid, $2::uuid)
             ON CONFLICT DO NOTHING`,
            [projectId, categoryId]
          );
        }
      }

      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    }

    const finalCount = await client.query(
      `SELECT COUNT(*)::int AS count FROM project WHERE edition = $1`,
      [edition]
    );
    console.log(
      JSON.stringify(
        {
          done: true,
          edition,
          projectsInEditionAfterImport: finalCount.rows[0]?.count ?? 0,
        },
        null,
        2
      )
    );
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error("Import failed:", error.message);
  process.exit(1);
});
