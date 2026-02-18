# Supabase database connection

## What was checked

- **Direct connection** (`db.PROJECT_REF.supabase.co:5432`): Resolves to **IPv6 only**. From this machine the connection **times out** (IPv6 not working or blocked).
- **Pooler** (`aws-0-REGION.pooler.supabase.com`): Reachable over **IPv4**, but the exact pooler hostname depends on where your project is deployed. Guessing common regions returns "Tenant or user not found" if the region is wrong.

## What you need to do

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → your project.
2. Click **Connect** (or **Project Settings** → **Database**).
3. Under **Connection string**, choose **Session** (or **Transaction** if you prefer).
4. Copy the **URI** (it will look like `postgresql://postgres.PROJECT_REF:PASSWORD@aws-0-REGION.pooler.supabase.com:5432/postgres` or similar — the host may be `aws-1-...` or another region).
5. Put it in `apps/api/.env` as:
   ```bash
   DATABASE_URL=<paste the URI>
   ```
6. Run the connection test:
   ```bash
   cd apps/api && node scripts/test-db-connection.mjs
   ```
7. Then run migrations (if needed) and restore:
   ```bash
   pnpm migration:run
   pnpm run restore:downloads -- /path/to/export/files
   ```

## Quick test

From `apps/api`:

```bash
node scripts/test-db-connection.mjs
```

This tries the current `DATABASE_URL` (direct + pooler). If you see "OK Pooler ...", the connection is good. If you see "Tenant or user not found", replace `DATABASE_URL` with the pooler URI from the dashboard.
