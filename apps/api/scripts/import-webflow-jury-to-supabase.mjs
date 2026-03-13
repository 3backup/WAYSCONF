#!/usr/bin/env node
/**
 * Import jury members from Webflow into reusable Supabase/Postgres tables.
 *
 * Default mode is DRY RUN. Add --apply to write to DB.
 *
 * Example:
 *   node apps/api/scripts/import-webflow-jury-to-supabase.mjs --apply
 *   node apps/api/scripts/import-webflow-jury-to-supabase.mjs \
 *     --collection-id 6846a22a95d3c778d528d015 \
 *     --fallback-edition 2025 \
 *     --apply
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pg from "pg";

const WEBFLOW_API_BASE = "https://api.webflow.com/v2";
const DEFAULT_COLLECTION_ID = "6846a22a95d3c778d528d015";

const NAME_KEYS = [
  "name",
  "full-name",
  "person-name",
  "jury-name",
  "speaker-name",
  "title",
];

const ROLE_KEYS = [
  "role",
  "job-title",
  "position",
  "positoin",
  "job-position",
  "title-2",
  "subtitle",
  "function",
];

const COMPANY_KEYS = [
  "company",
  "company-name",
  "organization",
  "organisation",
  "brand",
  "workplace",
];

const BIO_KEYS = [
  "bio",
  "description",
  "about",
  "short-bio",
  "intro",
  "summary",
];

const IMAGE_KEYS = [
  "image",
  "photo",
  "avatar",
  "headshot",
  "profile-image",
  "profile-photo",
  "thumbnail",
  "picture",
  "portrait",
];

const LINK_KEYS = [
  "linkedin",
  "linkedin-url",
  "profile-url",
  "profile-link",
  "website",
  "url",
];

const YEAR_KEYS = [
  "year",
  "edition-year",
  "event-year",
  "jury-year",
  "edition",
  "season",
];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "../../..");

function parseArgs(argv) {
  const out = {};
  for (let i = 2; i < argv.length; i += 1) {
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
    const match = line.match(/^([^#=][^=]*)=(.*)$/);
    if (!match) continue;
    const key = match[1].trim();
    const value = match[2].trim().replace(/^"|"$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}

function asString(value) {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.length ? trimmed : null;
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }
  return null;
}

function asUrl(value) {
  const direct = asString(value);
  if (direct) {
    if (/^https?:\/\//i.test(direct)) {
      return direct;
    }
    if (/^[\w.-]+\.[a-z]{2,}/i.test(direct)) {
      return `https://${direct}`;
    }
  }

  if (value && typeof value === "object") {
    return asUrl(value.url);
  }

  return null;
}

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]+/g, "");
}

function slugify(value, fallback = "jury-person") {
  const normalized = normalizeText(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 140);
  return normalized || fallback;
}

function normalizeProfileUrl(value) {
  const url = asUrl(value);
  if (!url) return null;

  try {
    const parsed = new URL(url);
    parsed.hash = "";
    parsed.search = "";
    let pathname = parsed.pathname.replace(/\/+$/, "");
    if (!pathname) pathname = "/";
    return `${parsed.hostname.toLowerCase()}${pathname.toLowerCase()}`;
  } catch (_) {
    return url.toLowerCase().replace(/^https?:\/\//, "").replace(/\/+$/, "");
  }
}

function pickText(fields, keys) {
  for (const key of keys) {
    const value = asString(fields[key]);
    if (value) return value;
  }
  return null;
}

function pickUrl(fields, keys) {
  for (const key of keys) {
    const value = asUrl(fields[key]);
    if (value) return value;
  }
  return null;
}

function pickByNamePattern(fields, fragments, resolver) {
  for (const [key, value] of Object.entries(fields)) {
    const lowered = key.toLowerCase();
    if (!fragments.some((fragment) => lowered.includes(fragment))) {
      continue;
    }
    const resolved = resolver(value);
    if (resolved) return resolved;
  }
  return null;
}

function parseEditionValue(value) {
  const text = asString(value);
  if (!text) return null;
  const match = text.match(/\b(20\d{2})\b/);
  if (!match) return null;
  const parsed = Number.parseInt(match[1], 10);
  return Number.isNaN(parsed) ? null : parsed;
}

function uniqueEditions(values) {
  return [...new Set(values.filter((value) => Number.isFinite(value)))];
}

function extractEditionValues(fields) {
  const editions = [];
  for (const key of YEAR_KEYS) {
    const direct = parseEditionValue(fields[key]);
    if (direct) {
      editions.push(direct);
    }
  }

  for (const value of Object.values(fields)) {
    if (Array.isArray(value)) continue;
    const parsed = parseEditionValue(value);
    if (parsed) {
      editions.push(parsed);
    }
  }

  return uniqueEditions(editions);
}

function findYearFieldSlug(meta) {
  const fields = Array.isArray(meta?.fields) ? meta.fields : [];

  const explicit = fields.find((field) =>
    ["year", "edition-year", "event-year", "jury-year"].includes(
      String(field?.slug ?? "").toLowerCase()
    )
  );
  if (explicit?.slug) {
    return explicit.slug;
  }

  const inferred = fields.find((field) => {
    const type = String(field?.type ?? "").toLowerCase();
    const slug = String(field?.slug ?? "").toLowerCase();
    return (
      (type === "reference" || type === "multireference") &&
      slug.includes("year")
    );
  });

  return inferred?.slug ?? null;
}

function findYearCollectionId(meta) {
  const yearSlug = findYearFieldSlug(meta);
  if (!yearSlug) return null;

  const fields = Array.isArray(meta?.fields) ? meta.fields : [];
  const field = fields.find((entry) => entry?.slug === yearSlug);
  return field?.validations?.collectionId ?? null;
}

function collectEditionIds(rawValue) {
  if (Array.isArray(rawValue)) {
    return rawValue
      .map((entry) => {
        if (typeof entry === "object" && entry !== null) {
          return asString(entry.id) ?? asString(entry.value);
        }
        return asString(entry);
      })
      .filter(Boolean);
  }

  if (rawValue && typeof rawValue === "object") {
    return [asString(rawValue.id) ?? asString(rawValue.value)].filter(Boolean);
  }

  return [asString(rawValue)].filter(Boolean);
}

function buildEditionResolver(yearFieldSlug, yearMap, fallbackEdition) {
  return (fields) => {
    const editions = [];

    if (yearFieldSlug) {
      const rawYear = fields[yearFieldSlug];
      for (const refId of collectEditionIds(rawYear)) {
        const mapped = yearMap.get(refId);
        const parsed = parseEditionValue(mapped ?? refId);
        if (parsed) {
          editions.push(parsed);
        }
      }

      const direct = parseEditionValue(rawYear);
      if (direct) {
        editions.push(direct);
      }
    }

    const inferred = extractEditionValues(fields);
    editions.push(...inferred);

    const unique = uniqueEditions(editions);
    if (unique.length > 0) {
      return unique;
    }

    return Number.isFinite(fallbackEdition) ? [fallbackEdition] : [];
  };
}

async function fetchJson(url, token) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "accept-version": "1.0.0",
      accept: "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(`Request failed (${response.status}): ${errorText}`);
  }

  return response.json();
}

async function fetchCollectionItems(collectionId, token) {
  const all = [];
  let offset = 0;
  const limit = 100;

  while (true) {
    const payload = await fetchJson(
      `${WEBFLOW_API_BASE}/collections/${collectionId}/items/live?limit=${limit}&offset=${offset}`,
      token
    );
    const items = Array.isArray(payload?.items) ? payload.items : [];
    all.push(...items);
    if (items.length < limit) break;
    offset += limit;
  }

  return all;
}

function buildSourceKey({ profileUrl, slug, name, company }) {
  const normalizedProfile = normalizeProfileUrl(profileUrl);
  if (normalizedProfile) {
    return `profile:${normalizedProfile}`;
  }

  if (slug) {
    return `slug:${slug.toLowerCase()}`;
  }

  const normalizedName = normalizeText(name ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
  const normalizedCompany = normalizeText(company ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
  return `name:${normalizedName}|company:${normalizedCompany}`;
}

function scoreSnapshot(snapshot) {
  return [
    snapshot.role,
    snapshot.company,
    snapshot.bio,
    snapshot.imageUrl,
    snapshot.profileUrl,
  ].filter(Boolean).length;
}

function shouldReplaceSnapshot(current, candidate) {
  if (!current) return true;
  const currentScore = scoreSnapshot(current);
  const candidateScore = scoreSnapshot(candidate);

  if (candidateScore !== currentScore) {
    return candidateScore > currentScore;
  }

  return candidate.sortOrder < current.sortOrder;
}

function mergeDraftsBySourceKey(drafts) {
  const merged = new Map();

  for (const draft of drafts) {
    const existing = merged.get(draft.sourceKey);
    if (!existing) {
      merged.set(draft.sourceKey, {
        externalId: draft.externalId,
        sourceKey: draft.sourceKey,
        slug: draft.slug,
        name: draft.name,
        role: draft.role,
        company: draft.company,
        bio: draft.bio,
        imageUrl: draft.imageUrl,
        profileUrl: draft.profileUrl,
        editions: new Map(
          draft.editions.map((edition) => [edition.edition, edition])
        ),
      });
      continue;
    }

    if (!existing.slug && draft.slug) {
      existing.slug = draft.slug;
    }

    if (shouldReplaceSnapshot(existing, draft)) {
      existing.externalId = draft.externalId;
      existing.name = draft.name;
      existing.role = draft.role;
      existing.company = draft.company;
      existing.bio = draft.bio;
      existing.imageUrl = draft.imageUrl;
      existing.profileUrl = draft.profileUrl;
    }

    for (const editionSnapshot of draft.editions) {
      const currentSnapshot = existing.editions.get(editionSnapshot.edition);
      if (shouldReplaceSnapshot(currentSnapshot, editionSnapshot)) {
        existing.editions.set(editionSnapshot.edition, editionSnapshot);
      }
    }
  }

  return Array.from(merged.values()).map((entry) => ({
    ...entry,
    editions: Array.from(entry.editions.values()).sort(
      (left, right) => left.edition - right.edition
    ),
  }));
}

function buildDraft(item, index, resolveEditions) {
  const fields = item?.fieldData ?? {};
  const name =
    pickText(fields, NAME_KEYS) ??
    pickByNamePattern(fields, ["name"], asString) ??
    pickByNamePattern(fields, ["title"], asString);

  if (!name) {
    return null;
  }

  const role =
    pickText(fields, ROLE_KEYS) ??
    pickByNamePattern(fields, ["role", "position", "title"], asString);
  const company =
    pickText(fields, COMPANY_KEYS) ??
    pickByNamePattern(fields, ["company", "organization", "organisation"], asString);
  const bio =
    pickText(fields, BIO_KEYS) ??
    pickByNamePattern(fields, ["bio", "about", "description", "summary"], asString);
  const imageUrl =
    pickUrl(fields, IMAGE_KEYS) ??
    pickByNamePattern(fields, ["image", "photo", "avatar", "headshot"], asUrl);
  const profileUrl =
    pickUrl(fields, LINK_KEYS) ??
    pickByNamePattern(fields, ["linkedin", "website", "profile", "url"], asUrl);
  const slug =
    pickText(fields, ["slug"]) ??
    asString(item?.slug) ??
    slugify(name, `jury-${String(index + 1)}`);
  const editions = resolveEditions(fields);

  const sourceKey = buildSourceKey({ profileUrl, slug, name, company });
  const externalId = asString(item?.id) ?? `${sourceKey}:${index + 1}`;

  return {
    externalId,
    sourceKey,
    slug,
    name,
    role,
    company,
    bio,
    imageUrl,
    profileUrl,
    editions: editions.map((edition) => ({
      edition,
      role,
      company,
      bio,
      imageUrl,
      profileUrl,
      sortOrder: index + 1,
    })),
  };
}

function resolveUniqueSlug(baseSlug, takenSlugs) {
  let candidate = baseSlug;
  if (!takenSlugs.has(candidate)) {
    takenSlugs.add(candidate);
    return candidate;
  }

  let suffix = 2;
  while (takenSlugs.has(`${candidate}-${suffix}`)) {
    suffix += 1;
  }
  const uniqueSlug = `${candidate}-${suffix}`;
  takenSlugs.add(uniqueSlug);
  return uniqueSlug;
}

async function main() {
  const args = parseArgs(process.argv);
  const collectionId = asString(args["collection-id"]) ?? DEFAULT_COLLECTION_ID;
  const fallbackEditionRaw = Number.parseInt(
    String(args["fallback-edition"] ?? ""),
    10
  );
  const fallbackEdition = Number.isNaN(fallbackEditionRaw)
    ? null
    : fallbackEditionRaw;
  const apply = Boolean(args.apply);

  loadEnvFile(path.join(ROOT_DIR, "apps/api/.env"));
  loadEnvFile(path.join(ROOT_DIR, "apps/ways-awards/.env"));

  const databaseUrl = process.env.DATABASE_URL;
  const webflowToken =
    process.env.WEBFLOW_CMS_API_TOKEN ?? process.env.WEBFLOW_SITE_API_TOKEN;

  if (!databaseUrl) {
    console.error("Missing DATABASE_URL");
    process.exit(1);
  }

  if (!webflowToken) {
    console.error("Missing WEBFLOW_CMS_API_TOKEN / WEBFLOW_SITE_API_TOKEN");
    process.exit(1);
  }

  const collectionMeta = await fetchJson(
    `${WEBFLOW_API_BASE}/collections/${collectionId}`,
    webflowToken
  );
  const items = await fetchCollectionItems(collectionId, webflowToken);
  const yearFieldSlug = findYearFieldSlug(collectionMeta);
  const yearCollectionId = findYearCollectionId(collectionMeta);
  const yearMap = new Map();

  if (yearCollectionId) {
    const yearItems = await fetchCollectionItems(yearCollectionId, webflowToken);
    for (const yearItem of yearItems) {
      const fieldData = yearItem?.fieldData ?? {};
      const label = asString(fieldData.name) ?? asString(fieldData.slug);
      const id = asString(yearItem?.id);
      if (id && label) {
        yearMap.set(id, label);
      }
    }
  }

  const resolveEditions = buildEditionResolver(
    yearFieldSlug,
    yearMap,
    fallbackEdition
  );
  const drafts = items
    .map((item, index) => buildDraft(item, index, resolveEditions))
    .filter(Boolean);
  const mergedDrafts = mergeDraftsBySourceKey(drafts);
  const assignmentCount = mergedDrafts.reduce(
    (total, draft) => total + draft.editions.length,
    0
  );

  console.log(
    JSON.stringify(
      {
        mode: apply ? "apply" : "dry-run",
        collectionId,
        fallbackEdition,
        totalWebflowItems: items.length,
        reusablePeople: mergedDrafts.length,
        editionAssignments: assignmentCount,
        sample: mergedDrafts.slice(0, 5).map((draft) => ({
          sourceKey: draft.sourceKey,
          slug: draft.slug,
          name: draft.name,
          editions: draft.editions.map((edition) => edition.edition),
        })),
      },
      null,
      2
    )
  );

  if (!apply) {
    return;
  }

  const client = new pg.Client({ connectionString: databaseUrl });
  await client.connect();

  try {
    const existingPeopleResult = await client.query(
      `SELECT id, source_key, slug FROM jury_person`
    );
    const existingBySourceKey = new Map(
      existingPeopleResult.rows.map((row) => [
        String(row.source_key),
        { id: String(row.id), slug: String(row.slug) },
      ])
    );
    const takenSlugs = new Set(
      existingPeopleResult.rows.map((row) => String(row.slug))
    );

    await client.query("BEGIN");

    let insertedPeople = 0;
    let updatedPeople = 0;
    let upsertedAssignments = 0;

    for (const draft of mergedDrafts) {
      const existing = existingBySourceKey.get(draft.sourceKey);
      const slug = existing
        ? existing.slug
        : resolveUniqueSlug(draft.slug, takenSlugs);

      let personId = existing?.id ?? null;

      if (personId) {
        await client.query(
          `UPDATE jury_person
           SET external_id = COALESCE(external_id, $2),
               name = $3,
               role = $4,
               company = $5,
               bio = $6,
               image_url = $7,
               profile_url = $8,
               is_published = true
           WHERE id = $1::uuid`,
          [
            personId,
            draft.externalId,
            draft.name,
            draft.role,
            draft.company,
            draft.bio,
            draft.imageUrl,
            draft.profileUrl,
          ]
        );
        updatedPeople += 1;
      } else {
        const insertResult = await client.query(
          `INSERT INTO jury_person (
             external_id,
             source_key,
             slug,
             name,
             role,
             company,
             bio,
             image_url,
             profile_url,
             is_published
           ) VALUES (
             $1, $2, $3, $4, $5, $6, $7, $8, $9, true
           )
           RETURNING id`,
          [
            draft.externalId,
            draft.sourceKey,
            slug,
            draft.name,
            draft.role,
            draft.company,
            draft.bio,
            draft.imageUrl,
            draft.profileUrl,
          ]
        );
        personId = String(insertResult.rows[0].id);
        insertedPeople += 1;
      }

      for (const edition of draft.editions) {
        await client.query(
          `INSERT INTO jury_person_edition (
             jury_person_id,
             edition,
             role,
             company,
             bio,
             image_url,
             profile_url,
             is_published,
             sort_order
           ) VALUES (
             $1::uuid, $2, $3, $4, $5, $6, $7, true, $8
           )
           ON CONFLICT (jury_person_id, edition)
           DO UPDATE SET
             role = EXCLUDED.role,
             company = EXCLUDED.company,
             bio = EXCLUDED.bio,
             image_url = EXCLUDED.image_url,
             profile_url = EXCLUDED.profile_url,
             is_published = EXCLUDED.is_published,
             sort_order = EXCLUDED.sort_order`,
          [
            personId,
            edition.edition,
            edition.role,
            edition.company,
            edition.bio,
            edition.imageUrl,
            edition.profileUrl,
            edition.sortOrder,
          ]
        );
        upsertedAssignments += 1;
      }
    }

    await client.query("COMMIT");

    console.log(
      JSON.stringify(
        {
          insertedPeople,
          updatedPeople,
          upsertedAssignments,
        },
        null,
        2
      )
    );
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
