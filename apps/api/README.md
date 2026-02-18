# @waysconf/api

NestJS API for Ways Awards (projects, categories, votes). Uses TypeORM and PostgreSQL.

## Run locally

1. **Start Postgres** (default: `postgresql://postgres:postgres@localhost:5432/waysconf`)

   ```bash
   pnpm db:up
   ```

   Or with Docker directly: `docker compose up -d db` (from `apps/api`).

   If you use a different DB URL, set `DATABASE_URL`.

2. **Run migrations**

   ```bash
   pnpm migration:run
   ```

3. **Start the API**

   ```bash
   pnpm start:dev
   ```

   Base URL: `http://localhost:3003/api` (default port 3003 so it doesn’t conflict with other apps on 3000).

## Endpoints

- `GET /api/project/year/:edition` – list projects by edition
- `GET /api/project/year/:edition/categories` – list categories
- `GET /api/project/slug/:slug?edition=2026` – project by slug
- `POST /api/vote` – create vote (body: `projectId`, `email`, optional `marketing`)
- `GET /api/vote/verify/:hash/:projectId` – confirm vote
- `GET /api/vote/results` – vote results by project
- `GET /api/vote/emails` – distinct voter emails

## Env

| Variable              | Default                                      | Description           |
|-----------------------|----------------------------------------------|-----------------------|
| `PORT`                | `3003`                                       | HTTP port (3003 to avoid conflict with other apps on 3000) |
| `DATABASE_URL`        | `postgresql://postgres:postgres@localhost:5432/waysconf` | Postgres URL  |
| `ALLOW_MULTIPLE_VOTES` | `false`                                     | Allow multiple votes per email per project |

## Import JSON (Phase 7)

After creating the new Supabase (or Postgres) and running migrations, you can load data from a **JSON export** of the current WaysAwards DB:

1. Export your current data as **JSON** (see [docs/migration-export-format.md](../../docs/migration-export-format.md) for the expected shape).
2. Set `DATABASE_URL` to the **target** DB (e.g. new Supabase connection string).
3. From `apps/api`:

   ```bash
   node scripts/import-waysawards-json.mjs path/to/waysawards-export.json
   ```

   Or: `EXPORT_JSON_PATH=./export.json node scripts/import-waysawards-json.mjs`

The script inserts categories, projects, project_categories, and votes. It accepts both camelCase and snake_case field names and skips duplicates (ON CONFLICT DO NOTHING).

## Restore from export files (Downloads)

If you have exported rows from the old DB into separate files, use the restore script:

**Required files** (in one directory, e.g. `~/Downloads`):

- `category_rows.json`
- `project_rows.json`
- `project_categories_category_rows.json`
- `vote_rows (5).csv` (or any `vote_rows*.csv`)

**Steps:**

1. Ensure Supabase (or target DB) has the schema: from `apps/api` run `pnpm migration:run` (if you hit Node/npm errors, try Node 20 LTS).
2. Set `DATABASE_URL` in `apps/api/.env` to your Supabase Postgres URL.
3. From `apps/api`:

   ```bash
   pnpm run restore:downloads -- /Users/tomaszosowski/Downloads
   ```

   Or: `node scripts/restore-from-downloads.mjs /path/to/directory`

The script imports in order: categories → projects → project_categories → votes (from CSV). It skips `migration_rows.json` and does not use `vote_rows.sql` (our vote table has no `userId` column; the CSV is used instead).
