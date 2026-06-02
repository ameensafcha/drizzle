import { test, expect } from '@playwright/test';
import { getStore } from './db-utils';

test.describe('Formulation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('.section-tile').filter({ hasText: 'Formulation' }).first()).toBeVisible();
  });

  test('spec value edit saves to DB and reloads', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Formulation' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(500);

    // Find the spec input by its label (e.g. "Heat")
    const specCard = page.locator('.modal .card').filter({ hasText: 'Recipe Spec' });
    const heatLabel = specCard.locator('.label-cap').filter({ hasText: 'Heat' });
    const heatBox = heatLabel.locator('xpath=..');
    const heatInput = heatBox.locator('.num-input input');
    await heatInput.click();
    await heatInput.fill('15000');
    await heatInput.press('Enter');
    await page.waitForTimeout(3000);

    const db: any = await getStore('formulation');
    expect(db.specs.heat.val).toBe(15000);

    await page.keyboard.press('Escape');
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    await page.locator('.section-tile').filter({ hasText: 'Formulation' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(500);
    const specCard2 = page.locator('.modal .card').filter({ hasText: 'Recipe Spec' });
    const heatLabel2 = specCard2.locator('.label-cap').filter({ hasText: 'Heat' });
    const heatBox2 = heatLabel2.locator('xpath=..');
    const heatAfter = heatBox2.locator('.num-input input');
    const val = await heatAfter.inputValue();
    expect(val).toBe('15000');

    await heatAfter.click();
    await heatAfter.fill('0');
    await heatAfter.press('Enter');
    await page.waitForTimeout(3000);
  });

  test('compliance status cycles on click and saves to DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Formulation' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(500);

    const safetyCard = page.locator('.modal .card').filter({ hasText: 'Food Safety' });
    const firstItem = safetyCard.locator('li').first();
    const statusPill = firstItem.locator('span.mono').last();
    const before = await statusPill.textContent() || '';
    await statusPill.click();
    await page.waitForTimeout(2000);

    const db: any = await getStore('formulation');
    expect(db.compliance[0].status).not.toBe(before);

    await statusPill.click();
    await page.waitForTimeout(2000);
  });
});
