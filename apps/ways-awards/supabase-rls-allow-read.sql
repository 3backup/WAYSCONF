-- =============================================================================
-- Odblokowanie odczytu dla anon (RLS) – uruchom w Supabase SQL Editor.
-- Po tym /api/debug-supabase i strona powinny pokazać dane.
-- Później możesz zastąpić to politykami z supabase-rls-policies.sql
-- (tylko widoczne projekty: nie draft, nie archiwalne).
-- =============================================================================

ALTER TABLE "project" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "category" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "project_categories_category" ENABLE ROW LEVEL SECURITY;

-- Usuń stare polityki anon, jeśli były (żeby nie duplikować)
DROP POLICY IF EXISTS "anon_select_visible_projects" ON "project";
DROP POLICY IF EXISTS "anon_select_all_projects" ON "project";
DROP POLICY IF EXISTS "anon_select_categories" ON "category";
DROP POLICY IF EXISTS "anon_select_visible_links" ON "project_categories_category";
DROP POLICY IF EXISTS "anon_select_all_links" ON "project_categories_category";

-- Zezwól anon na SELECT (odczyt) – bez filtra, żeby działało od razu
CREATE POLICY "anon_select_all_projects"
  ON "project"
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "anon_select_categories"
  ON "category"
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "anon_select_all_links"
  ON "project_categories_category"
  FOR SELECT
  TO anon
  USING (true);
