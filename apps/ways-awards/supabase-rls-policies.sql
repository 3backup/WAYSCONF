-- =============================================================================
-- RLS policies for WaysAwards (Supabase project pvzcuiisdzfjzilbqwll)
-- Run this in Supabase Dashboard → SQL Editor.
--
-- TERAZ: tylko odczyt (anon) – bezpieczne, bez draftów/archiwalnych.
-- PRZYSZŁOŚĆ: na końcu pliku – jak włączyć dodawanie projektów i kategorii.
--
-- Jeśli nadal 0 projektów:
-- 1) W dev otwórz w przeglądarce: http://localhost:PORT/api/debug-supabase
-- 2) Jeśli project.rowCount = 0 i project.error = null → to RLS (brak polityk lub złe nazwy kolumn).
-- 3) Sprawdź nazwy kolumn w Supabase SQL Editor:
--    SELECT column_name FROM information_schema.columns
--    WHERE table_schema = 'public' AND table_name = 'project'
--    AND (column_name LIKE '%rchive%' OR column_name LIKE '%raft%');
--    Gdy zobaczysz is_archived, is_draft → uruchom: supabase-rls-policies-snake_case.sql
-- =============================================================================

-- 1) Enable RLS on tables (if not already)
ALTER TABLE "project" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "category" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "project_categories_category" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "vote" ENABLE ROW LEVEL SECURITY;

-- 2) Drop existing anon policies if you re-run this (optional)
DROP POLICY IF EXISTS "anon_select_visible_projects" ON "project";
DROP POLICY IF EXISTS "anon_select_all_projects" ON "project";
DROP POLICY IF EXISTS "anon_select_categories" ON "category";
DROP POLICY IF EXISTS "anon_select_visible_links" ON "project_categories_category";
DROP POLICY IF EXISTS "anon_select_all_links" ON "project_categories_category";
DROP POLICY IF EXISTS "anon_select_confirmed_votes" ON "vote";

-- 3) project: anon can SELECT only visible projects (not draft, not archived)
CREATE POLICY "anon_select_visible_projects"
  ON "project"
  FOR SELECT
  TO anon
  USING (
    "isArchived" = false
    AND "isDraft" = false
  );

-- 4) category: anon can SELECT all (names are public for voting)
CREATE POLICY "anon_select_categories"
  ON "category"
  FOR SELECT
  TO anon
  USING (true);

-- 5) project_categories_category: anon can SELECT only links for visible projects
CREATE POLICY "anon_select_visible_links"
  ON "project_categories_category"
  FOR SELECT
  TO anon
  USING (
    "projectId" IN (
      SELECT id FROM "project"
      WHERE "isArchived" = false AND "isDraft" = false
    )
  );

-- 6) vote: anon can SELECT only confirmed votes for visible projects
CREATE POLICY "anon_select_confirmed_votes"
  ON "vote"
  FOR SELECT
  TO anon
  USING (
    "confirmed" = true
    AND "projectId" IN (
      SELECT id FROM "project"
      WHERE "isArchived" = false AND "isDraft" = false
    )
  );

-- =============================================================================
-- PRZYSZŁOŚĆ: gdy aplikacja ma dodawać projekty i kategorie
-- =============================================================================
-- Obecnie: tylko odczyt (anon). Gdy będzie zapis, wybierz jedną z opcji:
--
-- OPCJA A) Backend (Nest/API) z kluczem service_role
--   - Supabase nie stosuje RLS do service_role → backend może INSERT/UPDATE/DELETE.
--   - Klucz service_role trzymać tylko na serwerze, nigdy w frontendzie.
--
-- OPCJA B) Aplikacja przez Supabase (np. zalogowany admin)
--   - Odkomentuj poniższe polityki dla roli authenticated.
--   - Wtedy zalogowani użytkownicy (np. przez Supabase Auth) będą mogli
--     dodawać/edytować projekty i kategorie. Możesz zawęzić (np. po emailu).
-- =============================================================================

-- Przyszłość – zapis dla authenticated (odkomentuj gdy włączysz dodawanie z aplikacji):
-- CREATE POLICY "authenticated_select_project" ON "project" FOR SELECT TO authenticated USING (true);
-- CREATE POLICY "authenticated_insert_project" ON "project" FOR INSERT TO authenticated WITH CHECK (true);
-- CREATE POLICY "authenticated_update_project" ON "project" FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
--
-- CREATE POLICY "authenticated_select_category" ON "category" FOR SELECT TO authenticated USING (true);
-- CREATE POLICY "authenticated_insert_category" ON "category" FOR INSERT TO authenticated WITH CHECK (true);
-- CREATE POLICY "authenticated_update_category" ON "category" FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
--
-- CREATE POLICY "authenticated_select_links" ON "project_categories_category" FOR SELECT TO authenticated USING (true);
-- CREATE POLICY "authenticated_insert_links" ON "project_categories_category" FOR INSERT TO authenticated WITH CHECK (true);
-- CREATE POLICY "authenticated_delete_links" ON "project_categories_category" FOR DELETE TO authenticated USING (true);
