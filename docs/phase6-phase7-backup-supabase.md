# Phase 6 & 7: WaysAwards backup and push to new Supabase

## Phase 6: Backup current WaysAwards DB (now)

- **Goal:** Back up everything in the current WaysAwards database (the one used by the live site / legacy API).
- **How:** Run the backup script using the source DB URL; dumps are written to `backups/` (gitignored).
- **See:** [scripts/README.md](../scripts/README.md) for how to run the backup.

## Phase 7: Push backup to new Supabase (later)

- **Goal:** Restore or migrate the backup into a new Supabase project.
- **Script:** [scripts/restore-waysawards-to-supabase.sh](../scripts/restore-waysawards-to-supabase.sh) – set `SUPABASE_DATABASE_URL`, run the script (optionally pass backup file path); it uses the latest `backups/waysawards-*.sql` if no file is given.
- **Steps:**
  1. Create a new Supabase project; get the Postgres connection string.
  2. **Same schema as legacy:** Run `bash scripts/restore-waysawards-to-supabase.sh` (or pass the backup file). See [scripts/README.md](../scripts/README.md).
  3. **New schema (monorepo API):** Run `apps/api` migrations against Supabase, then run a one-off ETL script that reads from the backup (or a temp DB restored from backup) and inserts into the new schema.
  4. Point `apps/api` at the new Supabase DB URL via `DATABASE_URL`.
