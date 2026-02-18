/**
 * Test Supabase connection. Direct (IPv6) often times out –
 * so we try all pooler regions (IPv4) and write working URL to .env.
 * Run: node scripts/test-db-connection.mjs
 */
import postgres from 'postgres';
import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const POOLER_REGIONS = [
  'us-east-1',
  'us-east-2',
  'us-west-1',
  'us-west-2',
  'eu-central-1',
  'eu-central-2',
  'eu-west-1',
  'eu-west-2',
  'eu-west-3',
  'eu-north-1',
  'ap-southeast-1',
  'ap-southeast-2',
  'ap-northeast-1',
  'ap-northeast-2',
  'ap-south-1',
  'ca-central-1',
  'sa-east-1',
];

async function loadEnv() {
  if (process.env.DATABASE_URL) return;
  try {
    const envPath = join(__dirname, '..', '.env');
    const env = await readFile(envPath, 'utf-8');
    for (const line of env.split('\n')) {
      const m = line.match(/^([^#=]+)=(.*)$/);
      if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
    }
  } catch (_) {}
}

async function tryConnect(url, timeoutMs = 8000) {
  try {
    const sql = postgres(url, { max: 1, connect_timeout: timeoutMs / 1000 });
    await sql`SELECT 1`;
    await sql.end();
    return true;
  } catch (_) {
    return false;
  }
}

async function main() {
  await loadEnv();
  let direct = process.env.DATABASE_URL;
  if (!direct) {
    console.error('DATABASE_URL not set in apps/api/.env');
    process.exit(1);
  }

  const match = direct.match(/postgres(?:ql)?:\/\/([^:]+):([^@]+)@([^/]+)\/(.+)/);
  if (!match) {
    console.error('Could not parse DATABASE_URL');
    process.exit(1);
  }
  const [, user, password, host] = match;
  const projectRefMatch = host.match(/db\.([^.]+)\.supabase\.co/);
  const projectRef = projectRefMatch ? projectRefMatch[1] : null;
  const db = (match[4] || 'postgres').split('?')[0];
  const passEnc = encodeURIComponent(decodeURIComponent(password));

  console.log('1. Trying direct connection (IPv6, often timeout)...');
  const directOk = await tryConnect(direct, 12000);
  if (directOk) {
    console.log('   OK Direct connection works.\n');
    return;
  }
  console.log('   FAIL (timeout – IPv6).\n');

  if (!projectRef) {
    console.log('Could not get project ref from URL. Use Session Pooler URI from Dashboard → Connect in .env');
    process.exit(1);
  }

  const poolerUser = `postgres.${projectRef}`;
  console.log('2. Trying pooler regions (IPv4)...');

  for (const region of POOLER_REGIONS) {
    for (const port of [5432, 6543]) {
      const poolerUrl = `postgresql://${poolerUser}:${passEnc}@aws-0-${region}.pooler.supabase.com:${port}/${db}`;
      process.stdout.write(`   aws-0-${region}:${port} ... `);
      const ok = await tryConnect(poolerUrl, 6000);
      if (ok) {
        console.log('OK\n');
        console.log('Working pooler URL found. Updating apps/api/.env ...');
        const envPath = join(__dirname, '..', '.env');
        let envContent = await readFile(envPath, 'utf-8');
        const lineMatch = envContent.match(/^DATABASE_URL=.*$/m);
        if (lineMatch) {
          envContent = envContent.replace(/^DATABASE_URL=.*$/m, `DATABASE_URL=${poolerUrl}`);
        } else {
          envContent = envContent.trimEnd() + '\nDATABASE_URL=' + poolerUrl + '\n';
        }
        await writeFile(envPath, envContent);
        console.log('Done. DATABASE_URL in .env is now the pooler (IPv4). Run restore:');
        console.log('  node scripts/restore-from-downloads.mjs /Users/tomaszosowski/Downloads');
        return;
      }
      console.log('no');
    }
  }

  for (const region of POOLER_REGIONS) {
    for (const port of [5432, 6543]) {
      const poolerUrl = `postgresql://${poolerUser}:${passEnc}@aws-1-${region}.pooler.supabase.com:${port}/${db}`;
      process.stdout.write(`   aws-1-${region}:${port} ... `);
      const ok = await tryConnect(poolerUrl, 6000);
      if (ok) {
        console.log('OK\n');
        console.log('Working pooler URL found. Updating apps/api/.env ...');
        const envPath = join(__dirname, '..', '.env');
        let envContent = await readFile(envPath, 'utf-8');
        envContent = envContent.replace(/^DATABASE_URL=.*$/m, `DATABASE_URL=${poolerUrl}`);
        await writeFile(envPath, envContent);
        console.log('Done. Run restore: node scripts/restore-from-downloads.mjs /Users/tomaszosowski/Downloads');
        return;
      }
      console.log('no');
    }
  }

  console.log('\nNo pooler host worked. Copy Session pooler URI from Supabase Dashboard → Connect → Session into apps/api/.env as DATABASE_URL.');
  process.exit(1);
}

main();
