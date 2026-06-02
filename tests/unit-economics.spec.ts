import { test, expect } from '@playwright/test';
import { getStore } from './db-utils';

test.describe('Unit Economics', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('.section-tile').filter({ hasText: 'Unit Economics' }).first()).toBeVisible();
  });

  test('retail price edit saves to DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Unit Economics' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(300);

    const input = page.locator('.modal .card').filter({ hasText: 'Pricing & Margin' }).locator('.num-input input');
    await input.click();
    await input.fill('35');
    await input.press('Enter');
    await page.waitForTimeout(3000);

    const db = await getStore('retailPrice');
    expect(db).toBe(35);

    await page.keyboard.press('Escape');
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    await page.locator('.section-tile').filter({ hasText: 'Unit Economics' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    const restored = page.locator('.modal .card').filter({ hasText: 'Pricing & Margin' }).locator('.num-input input');
    expect(await restored.inputValue()).toBe('35');

    await restored.click();
    await restored.fill('0');
    await restored.press('Enter');
    await page.waitForTimeout(3000);
  });

  test('ingredient cost edit saves to DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Unit Economics' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(300);

    const ingCard = page.locator('.modal .card').filter({ hasText: 'Ingredients' });
    const firstRow = ingCard.locator('.cost-table tbody tr').first();
    const input = firstRow.locator('.num-input input');
    await input.click();
    await page.waitForTimeout(100);
    await input.click({ clickCount: 3 });
    await input.press('Backspace');
    await input.pressSequentially('5.50', { delay: 50 });
    await input.press('Enter');
    await page.waitForTimeout(3000);

    const db = await getStore('ingredients');
    expect(Array.isArray(db)).toBe(true);
    expect(db[0].val).toBe(5.5);

    await input.click({ clickCount: 3 });
    await input.press('Backspace');
    await input.pressSequentially('0', { delay: 50 });
    await input.press('Enter');
    await page.waitForTimeout(3000);
  });

  test('volume slider changes value in DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Unit Economics' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(300);

    const slider = page.locator('.modal input[type="range"]');
    await slider.evaluate((el: HTMLInputElement) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')!.set!;
      nativeInputValueSetter.call(el, '300');
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await page.waitForTimeout(3000);

    const db = await getStore('unitsPerMonth');
    expect(db).toBe(300);

    await slider.evaluate((el: HTMLInputElement) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')!.set!;
      nativeInputValueSetter.call(el, '10');
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await page.waitForTimeout(3000);
  });

  test('fixed costs edit saves to DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Unit Economics' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(300);

    // Find the fixed costs input by closest context
    // The Break-Even card has Monthly Fixed Costs label followed by num-input
    const modal = page.locator('.modal');
    const fcInput = modal.locator('.card').filter({ hasText: 'Break-Even' }).locator('.num-input input').first();
    await fcInput.click();
    await fcInput.fill('5000');
    await fcInput.press('Enter');
    await page.waitForTimeout(3000);

    const db = await getStore('fixedCosts');
    expect(db).toBe(5000);

    await fcInput.click();
    await fcInput.fill('0');
    await fcInput.press('Enter');
    await page.waitForTimeout(3000);
  });

  test('reset clears economics values in DB', async ({ page }) => {
    const pricingCard = page.locator('.section-tile').filter({ hasText: 'Unit Economics' });
    await pricingCard.click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(300);

    const retailInput = page.locator('.modal .card').filter({ hasText: 'Pricing & Margin' }).locator('.num-input input');
    await retailInput.click();
    await retailInput.fill('99');
    await retailInput.press('Enter');
    await page.waitForTimeout(3000);

    let db = await getStore('retailPrice');
    expect(db).toBe(99);

    await page.keyboard.press('Escape');

    page.on('dialog', dialog => dialog.accept());
    await page.locator('button.btn.ghost').filter({ hasText: 'Reset Defaults' }).click();
    await page.waitForTimeout(3000);

    db = await getStore('retailPrice');
    expect(db).toBe(0);
  });
});
