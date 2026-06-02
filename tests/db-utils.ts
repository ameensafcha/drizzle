import * as dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

let sql: ReturnType<typeof neon> | null = null;

function getSql() {
  if (!sql) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error('DATABASE_URL not found in .env');
    sql = neon(url);
  }
  return sql;
}

export async function getStore(key: string): Promise<any> {
  const result: any = await getSql().query('SELECT value FROM dashboard_state WHERE key = $1', [key]);
  const rows = result.rows || result;
  return rows[0]?.value ?? null;
}

export async function deleteKeys(keys: string[]): Promise<void> {
  const placeholders = keys.map((_, i) => '$' + (i + 1)).join(',');
  await getSql().query(`DELETE FROM dashboard_state WHERE key IN (${placeholders})`, keys);
}
