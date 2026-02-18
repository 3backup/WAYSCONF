/**
 * Import WaysAwards export JSON into the database (new schema).
 * Run after migrations. Requires DATABASE_URL and path to JSON file.
 *
 * Usage: node scripts/import-waysawards-json.mjs <path-to-export.json>
 *   or:  EXPORT_JSON_PATH=./export.json node scripts/import-waysawards-json.mjs
 *
 * JSON shape: { projects: [], categories: [], votes: [], project_categories: [] }
 * Or separate files: pass path to a dir with projects.json, categories.json, votes.json, project_categories.json
 */

import pg from 'pg';
import { readFile } from 'fs/promises';
import { pathToFileURL } from 'url';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const DATABASE_URL = process.env.DATABASE_URL;
const pathArg = process.argv[2] || process.env.EXPORT_JSON_PATH;

if (!DATABASE_URL) {
  console.error('Set DATABASE_URL (e.g. your new Supabase Postgres URL).');
  process.exit(1);
}
if (!pathArg) {
  console.error('Usage: node scripts/import-waysawards-json.mjs <path-to-export.json>');
  process.exit(1);
}

function toVal(v) {
  return v === undefined || v === null ? null : v;
}

async function loadData(path) {
  const resolved = join(process.cwd(), path);
  const raw = await readFile(resolved, 'utf-8');
  return JSON.parse(raw);
}

async function main() {
  const client = new pg.Client({ connectionString: DATABASE_URL });
  await client.connect();

  let data;
  try {
    data = await loadData(pathArg);
  } catch (e) {
    console.error('Failed to read JSON:', e.message);
    process.exit(1);
  }

  const projects = data.projects || [];
  const categories = data.categories || [];
  const votes = data.votes || [];
  const projectCategories = data.project_categories || [];

  console.log('Importing:', categories.length, 'categories,', projects.length, 'projects,', votes.length, 'votes,', projectCategories.length, 'project_categories');


  try {
    for (const c of categories) {
      const id = c.id;
      const createdAt = c.createdAt || c.created_at || new Date().toISOString();
      const name = String(c.name ?? '');
      const externalId = String(c.externalId ?? c.external_id ?? '');
      await client.query(
        `INSERT INTO category ("id", "createdAt", "name", "externalId")
         VALUES ($1::uuid, $2::timestamptz, $3, $4)
         ON CONFLICT ("id") DO NOTHING`,
        [id, createdAt, name, externalId]
      );
    }

    const projectCols = [
      'id', 'createdAt', 'externalId', 'name', 'description', 'excerpt', 'slug', 'isArchived', 'isDraft',
      'contactPersonEmail', 'linkPrimaryRichText', 'isCommercial', 'linkToCaseStudyPlain', 'clientName',
      'toolsAndFramework', 'caseStudy', 'clientTimePeriod', 'organisation', 'titleOfTheProject', 'services',
      'contactPersonNumber', 'thumbnailUrl', 'thumbnailUrlSecondary', 'thumbnailUrlThird', 'year',
      'team', 'linkRichText', 'whyYou', 'linkToCaseStudy', 'edition'
    ];
    for (const p of projects) {
      const createdAt = p.createdAt || p.created_at || new Date().toISOString();
      await client.query(
        `INSERT INTO project (
          "id", "createdAt", "externalId", "name", "description", "excerpt", "slug", "isArchived", "isDraft",
          "contactPersonEmail", "linkPrimaryRichText", "isCommercial", "linkToCaseStudyPlain", "clientName",
          "toolsAndFramework", "caseStudy", "clientTimePeriod", "organisation", "titleOfTheProject", "services",
          "contactPersonNumber", "thumbnailUrl", "thumbnailUrlSecondary", "thumbnailUrlThird", "year",
          "team", "linkRichText", "whyYou", "linkToCaseStudy", "edition"
        ) VALUES (
          $1::uuid, $2::timestamptz, $3, $4, $5, $6, $7, $8, $9,
          $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
          $21, $22, $23, $24, $25, $26, $27, $28, $29, $30
        ) ON CONFLICT ("id") DO NOTHING`,
        [
          p.id, createdAt, toVal(p.externalId ?? ''), toVal(p.name ?? ''), toVal(p.description ?? ''), toVal(p.excerpt), toVal(p.slug ?? ''),
          !!p.isArchived, !!p.isDraft, toVal(p.contactPersonEmail ?? ''), toVal(p.linkPrimaryRichText), !!p.isCommercial,
          toVal(p.linkToCaseStudyPlain), toVal(p.clientName), toVal(p.toolsAndFramework ?? ''), toVal(p.caseStudy ?? ''), toVal(p.clientTimePeriod),
          toVal(p.organisation), toVal(p.titleOfTheProject), toVal(p.services), toVal(p.contactPersonNumber), toVal(p.thumbnailUrl),
          toVal(p.thumbnailUrlSecondary), toVal(p.thumbnailUrlThird), toVal(p.year), toVal(p.team ?? ''), toVal(p.linkRichText), toVal(p.whyYou ?? ''),
          toVal(p.linkToCaseStudy ?? p.linkToCaseStudyPlain), Number(p.edition) || 2025
        ]
      );
    }

    for (const pc of projectCategories) {
      const pid = pc.projectId ?? pc.project_id;
      const cid = pc.categoryId ?? pc.category_id;
      if (!pid || !cid) continue;
      await client.query(
        `INSERT INTO project_categories_category ("projectId", "categoryId") VALUES ($1::uuid, $2::uuid) ON CONFLICT DO NOTHING`,
        [pid, cid]
      );
    }

    for (const v of votes) {
      const createdAt = v.createdAt || v.created_at || new Date().toISOString();
      const projectId = v.projectId ?? v.project_id ?? (v.project && (v.project.id || v.project)) ?? null;
      await client.query(
        `INSERT INTO vote ("id", "createdAt", "marketing", "email", "confirmationHash", "confirmed", "projectId")
         VALUES ($1::uuid, $2::timestamptz, $3, $4, $5, $6, $7::uuid)
         ON CONFLICT ("id") DO NOTHING`,
        [v.id, createdAt, !!v.marketing, toVal(v.email ?? ''), toVal(v.confirmationHash ?? ''), !!v.confirmed, projectId]
      );
    }

    console.log('Import done.');
  } catch (e) {
    console.error('Import failed:', e.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();
