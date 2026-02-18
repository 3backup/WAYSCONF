# @waysconf/ways-awards

WaysAwards voting app (successor to dwa-voting-2026). Next.js 15, uses `@waysconf/shared` and `@waysconf/ui`, talks to `@waysconf/api`.

## Run locally (data from Supabase by default)

1. **Supabase** (projects/categories load from Supabase – no local API needed):
   - In `apps/ways-awards/.env` set:
     - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase project URL (e.g. `https://xxx.supabase.co`)
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = anon/public key from Project Settings → API
   - Your Supabase DB must have the same schema as the API (project, category, project_categories_category). Run migrations from `apps/api` against the Supabase DB if needed, then import data via `import:json`.

2. **Frontend**:
   - Run: `pnpm dev` (or `pnpm --filter @waysconf/ways-awards dev`).
   - App: http://localhost:3001 – projects and categories load from Supabase.

3. **Voting** (optional): voting and confirmations go through the Nest API. To use it, run `@waysconf/api` (default port **3003**) and set `NEXT_PUBLIC_API_URL=http://localhost:3003` in `.env`. API uses port 3003 so it doesn’t conflict with other apps on 3000.

## Scripts

- `pnpm dev` – dev server (port 3001)
- `pnpm build` – production build
- `pnpm start` – run production build (port 3001)
- `pnpm type-check` – TypeScript check
