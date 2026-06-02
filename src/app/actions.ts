'use server'

import { db, sql } from '@/db';
import { dashboardState } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getAllStore() {
  try {
    const result = await db.query.dashboardState.findMany();
    const map: Record<string, any> = {};
    for (const row of result) map[row.key] = row.value;
    return map;
  } catch (error) {
    console.error('Error getting all store:', error);
    return {};
  }
}

export async function getStore(key: string) {
  try {
    const result = await db.query.dashboardState.findFirst({
      where: eq(dashboardState.key, key),
    });
    return result?.value || null;
  } catch (error) {
    console.error(`Error getting store for key ${key}:`, error);
    return null;
  }
}

export async function syncBatch(pairs: { key: string; value: any }[]) {
  try {
    for (const { key, value } of pairs) {
      await db.insert(dashboardState)
        .values({ key, value })
        .onConflictDoUpdate({
          target: dashboardState.key,
          set: { value, updatedAt: new Date() },
        });
    }
    for (const { key, value } of pairs) {
      try {
        const payload = key + ':' + JSON.stringify(value);
        await sql`SELECT pg_notify('ds_update', ${payload})`;
      } catch { /* ignore */ }
    }
    return { success: true };
  } catch (error) {
    console.error('Error syncing batch:', error);
    return { success: false, error };
  }
}

export async function setStore(key: string, value: any) {
  try {
    await db.insert(dashboardState)
      .values({ key, value })
      .onConflictDoUpdate({
        target: dashboardState.key,
        set: { value, updatedAt: new Date() },
      });
    const payload = key + ':' + JSON.stringify(value);
    try { await sql`SELECT pg_notify('ds_update', ${payload})`; } catch { /* notify non-critical */ }
    return { success: true };
  } catch (error) {
    console.error(`Error setting store for key ${key}:`, error);
    return { success: false, error };
  }
}

// Delta update — only updates a specific JSON path within a key
export async function patchStore(key: string, path: string[], value: any) {
  try {
    const jsonValue = JSON.stringify(value);
    await sql`
      UPDATE dashboard_state
      SET value = jsonb_set(COALESCE(value, '{}'::jsonb), ${path}::text[], ${jsonValue}::jsonb, true),
          updated_at = now()
      WHERE key = ${key}
    `;
    // Send the full key for re-fetch (client gets the specific path from the event)
    const payload = key + ':' + jsonValue;
    try { await sql`SELECT pg_notify('ds_update', ${payload})`; } catch { /* ignore */ }
    return { success: true };
  } catch (error) {
    console.error(`Error patching store for ${key}:`, error);
    return { success: false, error };
  }
}
