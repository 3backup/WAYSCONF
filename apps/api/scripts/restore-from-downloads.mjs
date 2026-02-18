/**
 * Restore Supabase from exported files (category_rows.json, project_rows.json,
 * project_categories_category_rows.json, vote_rows (5).csv).
 * Uses postgres.js (same as Supabase docs). Run after migrations.
 *
 * Usage: node scripts/restore-from-downloads.mjs [directory]
 */
import postgres from 'postgres';
import { readFile, readdir, access } from 'fs/promises';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

async function loadEnv() {
  if (process.env.DATABASE_URL) return;
  try {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const envPath = join(__dirname, '..', '.env');
    const env = await readFile(envPath, 'utf-8');
    for (const line of env.split('\n')) {
      const m = line.match(/^([^#=]+)=(.*)$/);
      if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
    }
  } catch (_) {}
}

const dirArg = process.argv[2] || resolve(process.cwd(), 'data');
const dir = resolve(dirArg);

function toVal(v) {
  return v === undefined || v === null ? null : v;
}
function trunc(s, len = 300) {
  if (s == null) return null;
  const str = String(s);
  return str.length > len ? str.slice(0, len) : str;
}
function safeDate(s) {
  if (!s) return new Date().toISOString();
  const d = new Date(s);
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}
function parseVoteHeader(headerLine) {
  const cols = parseCsvLine(headerLine);
  const idx = (name) => {
    const i = cols.findIndex((c) => c.toLowerCase() === name.toLowerCase());
    return i >= 0 ? i : -1;
  };
  return {
    id: idx('id'),
    createdAt: idx('createdat') >= 0 ? idx('createdat') : idx('createdAt'),
    marketing: idx('marketing'),
    email: idx('email'),
    confirmationHash: idx('confirmationhash') >= 0 ? idx('confirmationhash') : idx('confirmationHash'),
    confirmed: idx('confirmed'),
    projectId: idx('projectid') >= 0 ? idx('projectid') : idx('projectId'),
  };
}
function voteFromRow(parts, map) {
  const get = (i) => (i >= 0 && i < parts.length ? parts[i] : '');
  return {
    id: get(map.id),
    createdAt: safeDate(get(map.createdAt)),
    marketing: get(map.marketing) === 'true',
    email: get(map.email),
    confirmationHash: get(map.confirmationHash),
    confirmed: get(map.confirmed) === 'true',
    projectId: get(map.projectId) || null,
  };
}

function parseCsvLine(line) {
  return line.split(',').map((s) => s.replace(/^"|"$/g, '').trim());
}

async function main() {
  await loadEnv();
  const DATABASE_URL = process.env.DATABASE_URL;
  if (!DATABASE_URL) {
    console.error('Set DATABASE_URL (e.g. in apps/api/.env).');
    process.exit(1);
  }

  const sql = postgres(DATABASE_URL, { max: 1, connect_timeout: 30 });

  try {
    // 1. Categories
    const categoryPath = join(dir, 'category_rows.json');
    const categories = JSON.parse(await readFile(categoryPath, 'utf-8'));
    console.log('Importing', categories.length, 'categories...');
    for (const c of categories) {
      await sql`
        INSERT INTO category ("id", "createdAt", "name", "externalId")
        VALUES (${c.id}, ${c.createdAt || c.created_at || new Date().toISOString()}, ${trunc(c.name ?? '')}, ${trunc(c.externalId ?? c.external_id ?? '')})
        ON CONFLICT ("id") DO NOTHING
      `;
    }

    // 2. Projects
    const projectPath = join(dir, 'project_rows.json');
    const projects = JSON.parse(await readFile(projectPath, 'utf-8'));
    console.log('Importing', projects.length, 'projects...');
    for (const p of projects) {
      const createdAt = p.createdAt || p.created_at || new Date().toISOString();
      await sql`
        INSERT INTO project (
          "id", "createdAt", "externalId", "name", "description", "excerpt", "slug", "isArchived", "isDraft",
          "contactPersonEmail", "linkPrimaryRichText", "isCommercial", "linkToCaseStudyPlain", "clientName",
          "toolsAndFramework", "caseStudy", "clientTimePeriod", "organisation", "titleOfTheProject", "services",
          "contactPersonNumber", "thumbnailUrl", "thumbnailUrlSecondary", "thumbnailUrlThird", "year",
          "team", "linkRichText", "whyYou", "linkToCaseStudy", "edition"
        ) VALUES (
          ${p.id}, ${createdAt}, ${trunc(p.externalId ?? '')}, ${trunc(p.name ?? '', 500)}, ${toVal(p.description ?? '')}, ${toVal(p.excerpt)}, ${trunc(p.slug ?? '')},
          ${!!p.isArchived}, ${!!p.isDraft}, ${trunc(p.contactPersonEmail ?? '')}, ${toVal(p.linkPrimaryRichText)}, ${!!p.isCommercial},
          ${trunc(p.linkToCaseStudyPlain)}, ${trunc(p.clientName)}, ${toVal(p.toolsAndFramework ?? '')}, ${toVal(p.caseStudy ?? '')}, ${trunc(p.clientTimePeriod)},
          ${trunc(p.organisation)}, ${trunc(p.titleOfTheProject)}, ${trunc(p.services)}, ${trunc(p.contactPersonNumber)}, ${trunc(p.thumbnailUrl)},
          ${trunc(p.thumbnailUrlSecondary)}, ${trunc(p.thumbnailUrlThird)}, ${trunc(p.year)}, ${toVal(p.team ?? '')}, ${trunc(p.linkRichText)}, ${trunc(p.whyYou ?? '', 5000)},
          ${trunc(p.linkToCaseStudy ?? p.linkToCaseStudyPlain)}, ${Number(p.edition) || 2025}
        )
        ON CONFLICT ("id") DO NOTHING
      `;
    }

    // 3. Project-category links
    const pcPath = join(dir, 'project_categories_category_rows.json');
    const projectCategories = JSON.parse(await readFile(pcPath, 'utf-8'));
    console.log('Importing', projectCategories.length, 'project_categories...');
    for (const pc of projectCategories) {
      const pid = pc.projectId ?? pc.project_id;
      const cid = pc.categoryId ?? pc.category_id;
      if (!pid || !cid) continue;
      await sql`
        INSERT INTO project_categories_category ("projectId", "categoryId")
        VALUES (${pid}, ${cid})
        ON CONFLICT DO NOTHING
      `;
    }

    // 4. Votes from ALL vote_rows*.csv files
    const allFiles = (await readdir(dir).catch(() => [])).filter((f) => f.startsWith('vote_rows') && f.endsWith('.csv'));
    const voteCsvFiles = allFiles.length ? allFiles.sort() : ['vote_rows (5).csv'];
    let totalVotes = 0;
    const BATCH = 200;

    for (const voteCsvName of voteCsvFiles) {
      const voteCsvPath = join(dir, voteCsvName);
      try {
        await access(voteCsvPath);
      } catch {
        continue;
      }
      console.log('Importing votes from', voteCsvName, '...');
      const rl = createInterface({ input: createReadStream(voteCsvPath), crlfDelay: Infinity });
      let first = true;
      let voteMap = null;
      let count = 0;
      let batch = [];
      for await (const line of rl) {
        if (first) {
          first = false;
          voteMap = parseVoteHeader(line);
          if (voteMap.id < 0 || voteMap.email < 0) continue;
          continue;
        }
        const parts = parseCsvLine(line);
        if (parts.length < 5 || !voteMap) continue;
        const v = voteFromRow(parts, voteMap);
        if (!v.id || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v.id)) continue;
        batch.push(v);
        if (batch.length >= BATCH) {
          for (const v of batch) {
            await sql`
              INSERT INTO vote ("id", "createdAt", "marketing", "email", "confirmationHash", "confirmed", "projectId")
              VALUES (${v.id}, ${v.createdAt}, ${v.marketing}, ${trunc(v.email)}, ${trunc(v.confirmationHash)}, ${v.confirmed}, ${v.projectId})
              ON CONFLICT ("id") DO NOTHING
            `;
          }
          count += batch.length;
          totalVotes += batch.length;
          process.stdout.write('\r  ' + voteCsvName + ': ' + count + ' (total: ' + totalVotes + ')');
          batch = [];
        }
      }
      for (const v of batch) {
        await sql`
          INSERT INTO vote ("id", "createdAt", "marketing", "email", "confirmationHash", "confirmed", "projectId")
          VALUES (${v.id}, ${v.createdAt}, ${v.marketing}, ${trunc(v.email)}, ${trunc(v.confirmationHash)}, ${v.confirmed}, ${v.projectId})
          ON CONFLICT ("id") DO NOTHING
        `;
      }
      count += batch.length;
      totalVotes += batch.length;
      console.log('\r  ' + voteCsvName + ': ' + count + ' (total: ' + totalVotes + ')    ');
    }
    console.log('  Votes total:', totalVotes);

    console.log('Restore done.');
  } catch (e) {
    console.error('Restore failed:', e.message);
    if (e.code) console.error('Code:', e.code);
    process.exit(1);
  } finally {
    await sql.end();
  }
}

main();
