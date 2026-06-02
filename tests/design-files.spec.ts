import { test, expect } from '@playwright/test';
import { getStore } from './db-utils';

test.describe('Design Files', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('.section-tile').filter({ hasText: 'Design Files' }).first()).toBeVisible();
  });

  test('status cycles on click and saves to DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Design Files' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(500);

    const firstStatusBtn = page.locator('.modal .card').filter({ hasText: 'Design Files' }).locator('button.mono').first();
    const before = await firstStatusBtn.textContent() || '';
    await firstStatusBtn.click();
    await page.waitForTimeout(2000);

    const db: any = await getStore('designFiles');
    const allItems = Object.values(db).flat() as any[];
    expect(allItems[0].status).not.toBe(before);
  });
});
