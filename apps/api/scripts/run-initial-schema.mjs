/**
 * Run InitialSchema migration SQL via postgres.js (no TypeORM).
 * Run: node scripts/run-initial-schema.mjs
 */
import postgres from 'postgres';
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function loadEnv() {
  if (process.env.DATABASE_URL) return;
  try {
    const envPath = join(__dirname, '..', '.env');
    const env = await readFile(envPath, 'utf-8');
    for (const line of env.split('\n')) {
      const m = line.match(/^([^#=]+)=(.*)$/);
      if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
    }
  } catch (_) {}
}

const QUERIES = [
  `CREATE TABLE IF NOT EXISTS "user" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
    "name" character varying(300) NOT NULL,
    "email" character varying(300) NOT NULL,
    CONSTRAINT "PK_user" PRIMARY KEY ("id")
  )`,
  `CREATE TABLE IF NOT EXISTS "category" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
    "name" character varying(300) NOT NULL,
    "externalId" character varying(300) NOT NULL,
    CONSTRAINT "PK_category" PRIMARY KEY ("id")
  )`,
  `CREATE TABLE IF NOT EXISTS "project" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
    "externalId" character varying(300) NOT NULL,
    "name" character varying(500) NOT NULL,
    "description" text NOT NULL,
    "excerpt" text,
    "slug" character varying(300) NOT NULL,
    "isArchived" boolean NOT NULL,
    "isDraft" boolean NOT NULL,
    "contactPersonEmail" character varying(300) NOT NULL,
    "linkPrimaryRichText" text,
    "isCommercial" boolean NOT NULL,
    "linkToCaseStudyPlain" character varying(300),
    "clientName" character varying(300),
    "toolsAndFramework" text NOT NULL,
    "caseStudy" text NOT NULL,
    "clientTimePeriod" character varying(300),
    "organisation" character varying(300),
    "titleOfTheProject" character varying(300),
    "services" character varying(300),
    "contactPersonNumber" character varying(300),
    "thumbnailUrl" character varying(300),
    "thumbnailUrlSecondary" character varying(300),
    "thumbnailUrlThird" character varying(300),
    "year" character varying(300),
    "team" text NOT NULL,
    "linkRichText" character varying(300),
    "whyYou" character varying(5000) NOT NULL,
    "linkToCaseStudy" character varying(300),
    "edition" integer NOT NULL,
    CONSTRAINT "PK_project" PRIMARY KEY ("id")
  )`,
  `CREATE TABLE IF NOT EXISTS "vote" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
    "marketing" boolean NOT NULL DEFAULT false,
    "email" character varying(300) NOT NULL,
    "confirmationHash" character varying(300) NOT NULL,
    "confirmed" boolean NOT NULL DEFAULT false,
    "projectId" uuid,
    CONSTRAINT "PK_vote" PRIMARY KEY ("id"),
    CONSTRAINT "FK_vote_project" FOREIGN KEY ("projectId") REFERENCES "project"("id")
  )`,
  `CREATE TABLE IF NOT EXISTS "project_categories_category" (
    "projectId" uuid NOT NULL,
    "categoryId" uuid NOT NULL,
    CONSTRAINT "PK_project_categories_category" PRIMARY KEY ("projectId", "categoryId"),
    CONSTRAINT "FK_project_categories_category_project" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE,
    CONSTRAINT "FK_project_categories_category_category" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE
  )`,
  `CREATE TABLE IF NOT EXISTS "jury_person" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "external_id" character varying(300),
    "source_key" character varying(500) NOT NULL,
    "slug" character varying(300) NOT NULL,
    "name" character varying(300) NOT NULL,
    "role" character varying(300),
    "company" character varying(300),
    "bio" text,
    "image_url" character varying(500),
    "profile_url" character varying(500),
    "is_published" boolean NOT NULL DEFAULT true,
    CONSTRAINT "PK_jury_person" PRIMARY KEY ("id")
  )`,
  `CREATE TABLE IF NOT EXISTS "jury_person_edition" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "jury_person_id" uuid NOT NULL,
    "edition" integer NOT NULL,
    "role" character varying(300),
    "company" character varying(300),
    "bio" text,
    "image_url" character varying(500),
    "profile_url" character varying(500),
    "is_published" boolean NOT NULL DEFAULT true,
    "sort_order" integer NOT NULL DEFAULT 0,
    CONSTRAINT "PK_jury_person_edition" PRIMARY KEY ("id"),
    CONSTRAINT "FK_jury_person_edition_person" FOREIGN KEY ("jury_person_id") REFERENCES "jury_person"("id") ON DELETE CASCADE
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "IDX_jury_person_source_key" ON "jury_person" ("source_key")`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "IDX_jury_person_slug" ON "jury_person" ("slug")`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "IDX_jury_person_edition_unique" ON "jury_person_edition" ("jury_person_id", "edition")`,
  `CREATE INDEX IF NOT EXISTS "IDX_jury_person_edition_edition" ON "jury_person_edition" ("edition")`
];

async function main() {
  await loadEnv();
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error('DATABASE_URL not set');
    process.exit(1);
  }
  const sql = postgres(url, { max: 1 });
  try {
    for (const q of QUERIES) {
      await sql.unsafe(q);
    }
    console.log('Initial schema applied.');
  } catch (e) {
    console.error('Migration failed:', e.message);
    process.exit(1);
  } finally {
    await sql.end();
  }
}

main();
