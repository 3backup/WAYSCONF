#!/usr/bin/env node
/**
 * List components returned by Webflow API for the site in .env (WEBFLOW_SITE_ID).
 * Run from apps/ways-awards: pnpm devlink:components
 * Shows exactly what the server returns – this is what devlink sync uses.
 */
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const envPath = join(root, ".env");

function loadEnv() {
  try {
    const raw = readFileSync(envPath, "utf8");
    const env = {};
    for (const line of raw.split("\n")) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
      if (m) {
        let v = m[2].trim();
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'")))
          v = v.slice(1, -1).replace(/\\(.)/g, "$1");
        env[m[1]] = v;
      }
    }
    return env;
  } catch (e) {
    console.error("No .env found in apps/ways-awards. Run: pnpm devlink:login");
    process.exit(1);
  }
}

const env = loadEnv();
const token = env.WEBFLOW_SITE_API_TOKEN;
const siteId = env.WEBFLOW_SITE_ID;
if (!token) {
  console.error(".env missing WEBFLOW_SITE_API_TOKEN. Run: pnpm devlink:login");
  process.exit(1);
}
if (!siteId) {
  console.error(".env missing WEBFLOW_SITE_ID. Set it or run: pnpm devlink:sites");
  process.exit(1);
}

const url = `https://api.webflow.com/v2/sites/${siteId}/components?limit=100&offset=0`;
const res = await fetch(url, {
  headers: { Authorization: `Bearer ${token}` },
});
if (!res.ok) {
  console.error("API error:", res.status, await res.text());
  process.exit(1);
}
const data = await res.json();
const components = data.components || [];
const pagination = data.pagination || { total: 0, limit: 100, offset: 0 };

console.log("Co zwraca serwer Webflow (GET /v2/sites/:site_id/components):\n");
console.log("Pagination:", pagination);
console.log("\nKomponenty (id, name, group, description, readonly):\n");
for (const c of components) {
  console.log(`  ${c.name ?? "(bez nazwy)"}`);
  console.log(`    id: ${c.id}  group: ${c.group ?? "-"}  readonly: ${!!c.readonly}`);
  if (c.description) console.log(`    description: ${c.description}`);
  console.log("");
}
