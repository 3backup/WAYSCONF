#!/usr/bin/env node
/**
 * List all Webflow sites available with your .env token.
 * Run from apps/ways-awards: pnpm devlink:sites
 * Use the printed site ID in webflow.json (devlink.siteId) or .env (WEBFLOW_SITE_ID).
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
if (!token) {
  console.error(".env missing WEBFLOW_SITE_API_TOKEN. Run: pnpm devlink:login");
  process.exit(1);
}

const res = await fetch("https://api.webflow.com/v2/sites", {
  headers: { Authorization: `Bearer ${token}` },
});
if (!res.ok) {
  console.error("API error:", res.status, await res.text());
  process.exit(1);
}
const data = await res.json();
const sites = data.sites || [];
if (sites.length === 0) {
  console.log("No sites returned. Token may be site-specific; get Site ID from Webflow Designer → Site settings (or URL).");
  process.exit(0);
}
console.log("Webflow sites (use id as siteId in webflow.json or WEBFLOW_SITE_ID):\n");
for (const s of sites) {
  console.log(`  ${s.displayName ?? s.shortName ?? s.id}`);
  console.log(`    shortName: ${s.shortName ?? "-"}  id: ${s.id}\n`);
}
