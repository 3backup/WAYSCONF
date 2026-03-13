-- =============================================================================
-- RLS – wariant dla kolumn w SNAKE_CASE (is_archived, is_draft, project_id)
-- Użyj tego jeśli główny plik nie daje rzędów i w /api/debug-supabase
-- sampleKeys zawiera is_archived / is_draft zamiast isArchived / isDraft.
-- =============================================================================

ALTER TABLE "project" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "category" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "project_categories_category" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "vote" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "jury_person" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "jury_person_edition" ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_visible_projects" ON "project";
DROP POLICY IF EXISTS "anon_select_categories" ON "category";
DROP POLICY IF EXISTS "anon_select_visible_links" ON "project_categories_category";
DROP POLICY IF EXISTS "anon_select_confirmed_votes" ON "vote";
DROP POLICY IF EXISTS "anon_select_published_jury_people" ON "jury_person";
DROP POLICY IF EXISTS "anon_select_published_jury_editions" ON "jury_person_edition";

CREATE POLICY "anon_select_visible_projects"
  ON "project"
  FOR SELECT
  TO anon
  USING (
    is_archived = false
    AND is_draft = false
  );

CREATE POLICY "anon_select_categories"
  ON "category"
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "anon_select_visible_links"
  ON "project_categories_category"
  FOR SELECT
  TO anon
  USING (
    project_id IN (
      SELECT id FROM "project"
      WHERE is_archived = false AND is_draft = false
    )
  );

CREATE POLICY "anon_select_confirmed_votes"
  ON "vote"
  FOR SELECT
  TO anon
  USING (
    confirmed = true
    AND project_id IN (
      SELECT id FROM "project"
      WHERE is_archived = false AND is_draft = false
    )
  );

CREATE POLICY "anon_select_published_jury_people"
  ON "jury_person"
  FOR SELECT
  TO anon
  USING (is_published = true);

CREATE POLICY "anon_select_published_jury_editions"
  ON "jury_person_edition"
  FOR SELECT
  TO anon
  USING (
    is_published = true
    AND jury_person_id IN (
      SELECT id FROM "jury_person"
      WHERE is_published = true
    )
  );
