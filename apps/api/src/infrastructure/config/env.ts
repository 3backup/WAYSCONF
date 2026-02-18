import 'dotenv/config';

export function getEnv(key: string, defaultValue?: string): string {
  const value = process.env[key] ?? defaultValue;
  if (value === undefined) {
    throw new Error(`Missing required env: ${key}`);
  }
  return value;
}

export const env = {
  port: parseInt(getEnv('PORT', '3003'), 10),
  nodeEnv: getEnv('NODE_ENV', 'development'),
  databaseUrl: getEnv(
    'DATABASE_URL',
    'postgresql://postgres:postgres@localhost:5432/waysconf',
  ),
  allowMultipleVotes: getEnv('ALLOW_MULTIPLE_VOTES', 'false') === 'true',
} as const;
