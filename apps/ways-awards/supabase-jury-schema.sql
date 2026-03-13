-- =============================================================================
-- Reusable jury schema for Supabase/Postgres.
-- Run this in Supabase SQL Editor before importing jury members.
-- =============================================================================

CREATE TABLE IF NOT EXISTS "jury_person" (
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
);

CREATE TABLE IF NOT EXISTS "jury_person_edition" (
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
  CONSTRAINT "FK_jury_person_edition_person"
    FOREIGN KEY ("jury_person_id") REFERENCES "jury_person"("id") ON DELETE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "IDX_jury_person_source_key"
  ON "jury_person" ("source_key");

CREATE UNIQUE INDEX IF NOT EXISTS "IDX_jury_person_slug"
  ON "jury_person" ("slug");

CREATE UNIQUE INDEX IF NOT EXISTS "IDX_jury_person_edition_unique"
  ON "jury_person_edition" ("jury_person_id", "edition");

CREATE INDEX IF NOT EXISTS "IDX_jury_person_edition_edition"
  ON "jury_person_edition" ("edition");

ALTER TABLE "jury_person" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "jury_person_edition" ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_published_jury_people" ON "jury_person";
DROP POLICY IF EXISTS "anon_select_published_jury_editions" ON "jury_person_edition";

CREATE POLICY "anon_select_published_jury_people"
  ON "jury_person"
  FOR SELECT
  TO anon
  USING ("is_published" = true);

CREATE POLICY "anon_select_published_jury_editions"
  ON "jury_person_edition"
  FOR SELECT
  TO anon
  USING (
    "is_published" = true
    AND "jury_person_id" IN (
      SELECT id FROM "jury_person" WHERE "is_published" = true
    )
  );
