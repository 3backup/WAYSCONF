# Scripts

## Phase 6: Backup WaysAwards database

Backs up the **current WaysAwards** database (the one used by the live site / legacy API) so you can later push it to a new Supabase project (Phase 7).

### Requirements

- `pg_dump` available (Postgres client tools; e.g. `brew install libpq` on macOS).
- The **source database URL** for the current WaysAwards DB (e.g. from Fly Postgres, or wherever the legacy `wa-api/ways-awards-api` points).

### How to run

1. Set the source DB URL:
   ```bash
   export WAYSAWARDS_SOURCE_DATABASE_URL="postgresql://user:password@host:5432/dbname"
   ```

2. Run the backup script from the repo root:
   ```bash
   bash scripts/backup-waysawards-db.sh
   ```

3. Output is written to `backups/waysawards-YYYYMMDD-HHMMSS.sql`. The `backups/` directory is gitignored; keep dumps secure (they contain live data).

---

## Phase 7: Restore backup to new Supabase

After you create a new Supabase project (or any Postgres DB), restore a backup into it.

### Requirements

- `psql` available (Postgres client tools).
- **Target DB URL** – Supabase: Project Settings → Database → Connection string (URI).
- A backup file from Phase 6 (in `backups/` or pass path explicitly).

### How to run

1. Create a new Supabase project and copy the **Postgres connection string** (URI).
2. Set the target URL:
   ```bash
   export SUPABASE_DATABASE_URL="postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres"
   ```
   (Or use `TARGET_DATABASE_URL` for a non-Supabase Postgres.)
3. Restore from the **latest** backup in `backups/`:
   ```bash
   bash scripts/restore-waysawards-to-supabase.sh
   ```
   Or restore a specific file:
   ```bash
   bash scripts/restore-waysawards-to-supabase.sh backups/waysawards-20260201-120000.sql
   ```
4. When prompted, type `y` to confirm (restore overwrites data in the target DB).
5. Point `apps/api` at the new DB by setting `DATABASE_URL` to the same Supabase connection string.

### Schema note

This script restores the backup **as-is** (same schema as the source). If you need the **new monorepo API schema** instead: run `apps/api` migrations on the target DB, then import a **JSON export** with [apps/api/scripts/import-waysawards-json.mjs](../apps/api/scripts/import-waysawards-json.mjs) (see [docs/migration-export-format.md](../docs/migration-export-format.md)).
