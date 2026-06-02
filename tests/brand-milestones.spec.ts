import { test, expect } from '@playwright/test';
import { getStore } from './db-utils';

test.describe('Brand & Milestones', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('.display').filter({ hasText: "FOUNDER'S COCKPIT" }).first()).toBeVisible();
  });

  test('tagline edit saves to DB correctly', async ({ page }) => {
    const span = page.getByText('Hot honey, reimagined.').first();
    await span.click();
    await page.waitForTimeout(200);
    const inp = page.locator('input[type="text"]').first();
    await inp.fill('Test PW');
    await inp.press('Enter');
    await page.waitForTimeout(2000);

    const dbVal = await getStore('tagline');
    expect(dbVal).toBe('Test PW');

    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await expect(page.getByText('Test PW').first()).toBeVisible();

    const span2 = page.getByText('Test PW').first();
    await span2.click();
    await page.waitForTimeout(200);
    const inp2 = page.locator('input[type="text"]').first();
    await inp2.fill('Hot honey, reimagined.');
    await inp2.press('Enter');
    await page.waitForTimeout(2000);
  });

  test('stage change saves to DB correctly', async ({ page }) => {
    await page.locator('button.chip').filter({ hasText: /Pre-launch/ }).click();
    await page.waitForTimeout(200);
    await page.getByText('Soft Launch').first().click();
    await page.waitForTimeout(2000);

    const dbVal = await getStore('stage');
    expect(dbVal).toBe('Soft Launch');

    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await expect(page.locator('button.chip').filter({ hasText: /Soft Launch/ }).first()).toBeVisible();

    await page.locator('button.chip').filter({ hasText: /Soft Launch/ }).click();
    await page.waitForTimeout(200);
    await page.getByText('Pre-launch').first().click();
    await page.waitForTimeout(2000);
  });

  test('milestone status click updates DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Brand & Milestones' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    const firstPill = page.locator('.modal li').first().locator('span.mono').last();
    const before = await firstPill.textContent() || '';
    await firstPill.click();
    await page.waitForTimeout(2000);
    await page.keyboard.press('Escape');

    const dbMilestones: any[] = await getStore('milestones');

    expect(Array.isArray(dbMilestones)).toBe(true);
    expect(dbMilestones.length).toBeGreaterThanOrEqual(17);
    expect(dbMilestones[0].status).not.toBe(before);
  });

  test('milestones modal shows 17 items', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Brand & Milestones' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await expect(page.locator('.modal li')).toHaveCount(17);
    await page.keyboard.press('Escape');
  });

  test('reset updates DB (milestones status cleared)', async ({ page }) => {
    page.on('dialog', dialog => dialog.accept());
    await page.locator('button.btn.ghost').filter({ hasText: 'Reset Defaults' }).click();
    await page.waitForTimeout(2000);

    const dbMilestones: any[] = await getStore('milestones');
    if (dbMilestones && dbMilestones.length > 0) {
      const doneCount = dbMilestones.filter((m: any) => m.status === 'Done').length;
      expect(doneCount).toBe(0);
    }
  });
});
