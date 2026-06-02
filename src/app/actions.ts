'use server'

import { db } from '@/db';
import { dashboardState } from '@/db/schema';
import { eq } from 'drizzle-orm';

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

export async function setStore(key: string, value: any) {
  try {
    await db.insert(dashboardState)
      .values({ key, value })
      .onConflictDoUpdate({
        target: dashboardState.key,
        set: { value, updatedAt: new Date() },
      });
    return { success: true };
  } catch (error) {
    console.error(`Error setting store for key ${key}:`, error);
    return { success: false, error };
  }
}
