#!/usr/bin/env node
/**
 * Starts Next.js dev server on the first available port (3000, 3001, 3002, ...).
 * Run from repo root: pnpm -F @waysconf/ways-awards dev
 * Or from apps/ways-awards: pnpm dev
 */
import { createServer } from "net";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

function findFreePort(start = 3000, maxTries = 20) {
  return new Promise((resolve, reject) => {
    const tryPort = (port) => {
      if (port > start + maxTries) {
        reject(new Error(`No free port in range ${start}–${start + maxTries}`));
        return;
      }
      const server = createServer();
      server.once("error", () => tryPort(port + 1));
      server.once("listening", () => {
        server.close(() => resolve(port));
      });
      server.listen(port);
    };
    tryPort(start);
  });
}

findFreePort()
  .then((port) => {
    console.log(`\n  Ways Awards: http://localhost:${port}\n`);
    const nextBin = join(ROOT, "node_modules", "next", "dist", "bin", "next");
    const child = spawn(process.execPath, [nextBin, "dev", "--port", String(port)], {
      cwd: ROOT,
      stdio: "inherit",
      shell: false,
    });
    child.on("exit", (code) => process.exit(code ?? 0));
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
