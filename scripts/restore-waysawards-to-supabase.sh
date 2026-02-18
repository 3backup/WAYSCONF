#!/usr/bin/env bash
# Phase 7: Restore a WaysAwards backup into a new Supabase (or any Postgres) database.
# Requires: psql, SUPABASE_DATABASE_URL (or TARGET_DATABASE_URL), and a backup file.
# Usage: bash scripts/restore-waysawards-to-supabase.sh [backup-file.sql]
#   If no file given, uses the latest backups/waysawards-*.sql.

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
BACKUPS_DIR="${ROOT_DIR}/backups"

TARGET_URL="${SUPABASE_DATABASE_URL:-${TARGET_DATABASE_URL:-}}"
if [ -z "$TARGET_URL" ]; then
  echo "Error: set SUPABASE_DATABASE_URL (or TARGET_DATABASE_URL) to the target Postgres URL (e.g. new Supabase project)." >&2
  exit 1
fi

if [ -n "${1:-}" ]; then
  BACKUP_FILE="$1"
else
  # Use latest backup in backups/
  if [ ! -d "$BACKUPS_DIR" ]; then
    echo "Error: no backups/ directory. Run Phase 6 backup first." >&2
    exit 1
  fi
  BACKUP_FILE=$(ls -t "$BACKUPS_DIR"/waysawards-*.sql 2>/dev/null | head -1)
  if [ -z "$BACKUP_FILE" ]; then
    echo "Error: no waysawards-*.sql found in backups/. Run Phase 6 backup first." >&2
    exit 1
  fi
fi

if [ ! -f "$BACKUP_FILE" ]; then
  echo "Error: backup file not found: $BACKUP_FILE" >&2
  exit 1
fi

echo "Target: $TARGET_URL"
echo "Backup: $BACKUP_FILE"
echo "This will REPLACE data in the target database. Continue? [y/N]"
read -r confirm
if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
  echo "Aborted."
  exit 0
fi

echo "Restoring ..."
psql "$TARGET_URL" -f "$BACKUP_FILE"

echo "Done. Point apps/api DATABASE_URL at this database when ready."
