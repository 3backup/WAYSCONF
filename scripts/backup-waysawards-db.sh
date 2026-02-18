#!/usr/bin/env bash
# Backup current WaysAwards database (Phase 6).
# Requires: pg_dump, WAYSAWARDS_SOURCE_DATABASE_URL set to the source Postgres URL.
# Output: backups/waysawards-YYYYMMDD-HHMMSS.sql (plain SQL, restorable into any Postgres including Supabase)

set -e

SOURCE_URL="${WAYSAWARDS_SOURCE_DATABASE_URL:-}"
if [ -z "$SOURCE_URL" ]; then
  echo "Error: set WAYSAWARDS_SOURCE_DATABASE_URL to the current WaysAwards Postgres URL (e.g. production DB)." >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
BACKUPS_DIR="${ROOT_DIR}/backups"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
OUTPUT_FILE="${BACKUPS_DIR}/waysawards-${TIMESTAMP}.sql"

mkdir -p "$BACKUPS_DIR"

echo "Backing up WaysAwards DB to ${OUTPUT_FILE} ..."
pg_dump "$SOURCE_URL" \
  --no-owner \
  --no-acl \
  --format=plain \
  --file="$OUTPUT_FILE"

echo "Done. Backup written to ${OUTPUT_FILE}"
