# Migration: which format to download

## Recommendation

| If you... | Download | Why |
|-----------|----------|-----|
| Can run **pg_dump** (or get a **full SQL dump** from your DB host) | **SQL** | Restore directly into Supabase with `scripts/restore-waysawards-to-supabase.sh`. No extra script. |
| Can only **export from a UI** (Supabase, admin panel, etc.) | **JSON** | Easiest to map into the new schema. Use the import script below. |
| Only have **CSV** | CSV works | One file per table (projects, categories, votes, project_categories). The import script can be extended to read CSV; for now JSON is supported. |

**Best default: JSON** – flexible, one export file, and we have an import script that loads it into the new Supabase (after you run `apps/api` migrations there).

## JSON export shape

Export so you have one of these:

**Option A – Single file** (e.g. `waysawards-export.json`):

```json
{
  "projects": [ { "id": "...", "name": "...", "slug": "...", "edition": 2025, ... } ],
  "categories": [ { "id": "...", "name": "...", "externalId": "..." } ],
  "votes": [ { "id": "...", "email": "...", "projectId": "...", "confirmed": true, ... } ],
  "project_categories": [ { "projectId": "...", "categoryId": "..." } ]
}
```

**Option B – One file per entity**: `projects.json`, `categories.json`, `votes.json`, and optionally `project_categories.json` (array of `{ projectId, categoryId }`).

Run the import script from `apps/api` (see [apps/api/README.md](../apps/api/README.md#import-json-phase-7) or below).
