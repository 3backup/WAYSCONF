# WaysConf monorepo

pnpm + Turborepo monorepo: shared packages, API, and frontend apps.

## Structure

| Path | Description |
|------|--------------|
| `packages/shared` | Types, API contract, utils (sanitize, filter, email) |
| `packages/ui` | Shared UI (Button, Dropdown, Toast, etc.) – Tailwind |
| `packages/tsconfig` | Shared TypeScript configs |
| `apps/api` | NestJS API – projects, categories, votes (Postgres) |
| `apps/ways-awards` | WaysAwards voting app (Next.js, port 3001) |
| `apps/waysboard` | Waysboard – jobs, courses, events (Next.js, port 3002) |

## Commands (from repo root)

```bash
pnpm install    # install all workspaces
pnpm build      # build all packages and apps
pnpm dev        # run dev in all apps (turbo)
pnpm lint       # lint
pnpm type-check # type-check
pnpm clean      # remove dist/.next/node_modules
```

## Run individual apps

```bash
pnpm --filter @waysconf/api start:dev          # API (port 3000, needs Postgres)
pnpm --filter @waysconf/ways-awards dev        # WaysAwards (port 3001)
pnpm --filter @waysconf/waysboard dev          # Waysboard (port 3002)
```

See each app’s README for env and DB setup (e.g. `apps/api/README.md`).

## Backup and Supabase (Phase 6 & 7)

- **Phase 6 – Backup:** Back up the current WaysAwards DB → `backups/`. See [scripts/README.md](scripts/README.md).
- **Phase 7 – Restore:** Restore a backup into a new Supabase (or any Postgres). See [docs/phase6-phase7-backup-supabase.md](docs/phase6-phase7-backup-supabase.md).

## Legacy folders

`dwa-voting-2026/`, `wa-api/`, `voting2025/`, `wa-voting/`, `waysboard/` (root), `waysconf-26/` are legacy; the new system lives under `apps/` and `packages/`.
