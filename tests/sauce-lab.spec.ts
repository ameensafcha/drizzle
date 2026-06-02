import { test, expect } from '@playwright/test';
import { getStore } from './db-utils';

test.describe('Sauce Lab', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('.section-tile').filter({ hasText: 'Sauce Lab' }).first()).toBeVisible();
  });

  test('sauce status cycles on click and saves to DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Sauce Lab' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(500);

    const firstSauce = page.locator('.modal [class*="grid"] > div').first();
    const statusBtn = firstSauce.locator('button.mono');
    const before = await statusBtn.textContent() || '';
    await statusBtn.click();
    await page.waitForTimeout(2000);

    const db: any[] = await getStore('sauces');
    expect(db[0].status).not.toBe(before);
  });

  test('sauce heat dot click saves to DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Sauce Lab' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(500);

    const firstSauce = page.locator('.modal [class*="grid"] > div').first();
    const heatDot = firstSauce.locator('.heat-dot').first();
    const wasOn = await heatDot.getAttribute('class').then(c => c?.includes('on'));
    await heatDot.click();
    await page.waitForTimeout(2000);

    const db: any[] = await getStore('sauces');
    const heatAfter = db[0].heat;
    if (wasOn) expect(heatAfter).toBe(0);
    else expect(heatAfter).toBe(1);
  });

  test('sauce score star click saves to DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Sauce Lab' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(500);

    const firstSauce = page.locator('.modal [class*="grid"] > div').first();
    const firstStar = firstSauce.locator('.star').first();
    const wasOn = await firstStar.getAttribute('class').then(c => c?.includes('on'));
    await firstStar.click();
    await page.waitForTimeout(2000);

    const db: any[] = await getStore('sauces');
    if (wasOn) expect(db[0].score).toBe(0);
    else expect(db[0].score).toBe(1);
  });

  test('sauce filter works and shows correct count', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Sauce Lab' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(500);

    const db: any[] = await getStore('sauces');
    const conceptCount = db.filter((s: any) => s.status === 'Concept').length;
    const allBtn = page.locator('.modal .mono').filter({ hasText: 'All' }).first();
    await expect(allBtn).toBeVisible();

    const statusCount = page.locator('.modal .mono').filter({ hasText: /Concept|In R&D|Tested|Approved|Shelved/ }).first();
    await expect(statusCount).toBeVisible();
  });
});
