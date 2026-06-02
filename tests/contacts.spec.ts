import { test, expect } from '@playwright/test';
import { getStore } from './db-utils';

test.describe('Contacts', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('.section-tile').filter({ hasText: 'Contacts' }).first()).toBeVisible();
  });

  test('add contact row saves to DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Contacts' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(500);

    const beforeDb: any = await getStore('contacts');
    const beforeVendors = (beforeDb.vendors || []).length;

    const addBtn = page.locator('.modal .sheet-addrow');
    await addBtn.click();
    await page.waitForTimeout(2000);

    const db: any = await getStore('contacts');
    expect(db.vendors.length).toBe(beforeVendors + 1);

    const delBtn = page.locator('.modal .sheet-del').last();
    await delBtn.click();
    await page.waitForTimeout(2000);
  });

  test('edit contact company name saves to DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Contacts' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(500);

    const addBtn = page.locator('.modal .sheet-addrow');
    await addBtn.click();
    await page.waitForTimeout(1000);

    const firstCell = page.locator('.modal .sheet-cell-input').first();
    await firstCell.click();
    await firstCell.fill('Test Company');
    await firstCell.press('Tab');
    await page.waitForTimeout(2000);

    const db: any = await getStore('contacts');
    const added = db.vendors[db.vendors.length - 1];
    expect(added.company).toBe('Test Company');

    const delBtn = page.locator('.modal .sheet-del').last();
    await delBtn.click();
    await page.waitForTimeout(2000);
  });

  test('contact status cycles on click and saves to DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Contacts' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(500);

    const addBtn = page.locator('.modal .sheet-addrow');
    await addBtn.click();
    await page.waitForTimeout(1000);

    const statusBtn = page.locator('.modal .sheet-status').last();
    const before = await statusBtn.textContent() || '';
    await statusBtn.click();
    await page.waitForTimeout(2000);

    const db: any = await getStore('contacts');
    const added = db.vendors[db.vendors.length - 1];
    expect(added.status).not.toBe(before);

    const delBtn = page.locator('.modal .sheet-del').last();
    await delBtn.click();
    await page.waitForTimeout(2000);
  });
});
