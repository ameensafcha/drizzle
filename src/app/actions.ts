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
    for (const { key } of pairs) {
      try { await sql`SELECT pg_notify('ds_update', ${key})`; } catch { /* ignore */ }
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
    try { await sql`SELECT pg_notify('ds_update', ${key})`; } catch { /* notify non-critical */ }
    return { success: true };
  } catch (error) {
    console.error(`Error setting store for key ${key}:`, error);
    return { success: false, error };
  }
}
