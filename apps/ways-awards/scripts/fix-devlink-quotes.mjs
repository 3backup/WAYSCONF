#!/usr/bin/env node
/**
 * Zamienia „smart” apostrofy/cudzysłowy (Unicode) na zwykłe w plikach devlink.
 * Uruchom po `pnpm devlink:pull` jeśli sync rzuca SyntaxError przez Prettier.
 * Użycie: pnpm devlink:fix-quotes (z apps/ways-awards)
 */
import { readFileSync, writeFileSync } from "fs";
import { readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const devlinkDir = join(__dirname, "..", "devlink");

const SMART_SINGLE_LEFT = "\u2018"; // '
const SMART_SINGLE_RIGHT = "\u2019"; // '
const SMART_DOUBLE_LEFT = "\u201C"; // "
const SMART_DOUBLE_RIGHT = "\u201D"; // "
const STRAIGHT_SINGLE = "'";
const STRAIGHT_DOUBLE = '"';

function fix(str) {
  return str
    .replaceAll(SMART_SINGLE_LEFT, STRAIGHT_SINGLE)
    .replaceAll(SMART_SINGLE_RIGHT, STRAIGHT_SINGLE)
    .replaceAll(SMART_DOUBLE_LEFT, STRAIGHT_DOUBLE)
    .replaceAll(SMART_DOUBLE_RIGHT, STRAIGHT_DOUBLE);
}

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== "node_modules" && !e.name.startsWith(".")) walk(full);
    } else if (e.isFile() && (e.name.endsWith(".js") || e.name.endsWith(".jsx"))) {
      const content = readFileSync(full, "utf8");
      const next = fix(content);
      if (next !== content) {
        writeFileSync(full, next, "utf8");
        console.log("Fixed:", full);
      }
    }
  }
}

walk(devlinkDir);
console.log("Done.");
