# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: formulation.spec.ts >> Formulation >> compliance status cycles on click and saves to DB
- Location: tests\formulation.spec.ts:51:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.section-tile').filter({ hasText: 'Formulation' }).first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.section-tile').filter({ hasText: 'Formulation' }).first()

```

```yaml
- main:
  - text: "DRIZZLE & SAUCE Tagline Test PW 📍 Khobar, KSA • Launch: 2026 • Founder's Cockpit Current Stage"
  - button "● Pre-launch ▾"
  - button "↺ Reset Defaults"
  - button "Toggle theme": ☾ DARK
  - text: Retail Price 0 SAR per bottle · 240ml Cost Per Bottle 0.00 SAR all-in COGS Gross Margin 0.0% below floor Break-Even — bot bottles per month FOUNDER'S COCKPIT Drizzle & Sauce · founder's cockpit · 2026 ○ syncing...
- text: ✦ saved
- alert
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { getStore } from './db-utils';
  3  | 
  4  | test.describe('Formulation', () => {
  5  | 
  6  |   test.beforeEach(async ({ page }) => {
  7  |     await page.goto('/');
  8  |     await page.waitForLoadState('networkidle');
> 9  |     await expect(page.locator('.section-tile').filter({ hasText: 'Formulation' }).first()).toBeVisible();
     |                                                                                            ^ Error: expect(locator).toBeVisible() failed
  10 |   });
  11 | 
  12 |   test('spec value edit saves to DB and reloads', async ({ page }) => {
  13 |     await page.locator('.section-tile').filter({ hasText: 'Formulation' }).click();
  14 |     await expect(page.locator('.modal')).toBeVisible();
  15 |     await page.waitForTimeout(500);
  16 | 
  17 |     // Find the spec input by its label (e.g. "Heat")
  18 |     const specCard = page.locator('.modal .card').filter({ hasText: 'Recipe Spec' });
  19 |     const heatLabel = specCard.locator('.label-cap').filter({ hasText: 'Heat' });
  20 |     const heatBox = heatLabel.locator('xpath=..');
  21 |     const heatInput = heatBox.locator('.num-input input');
  22 |     await heatInput.click();
  23 |     await heatInput.fill('15000');
  24 |     await heatInput.press('Enter');
  25 |     await page.waitForTimeout(3000);
  26 | 
  27 |     const db: any = await getStore('formulation');
  28 |     expect(db.specs.heat.val).toBe(15000);
  29 | 
  30 |     await page.keyboard.press('Escape');
  31 |     await page.reload();
  32 |     await page.waitForLoadState('networkidle');
  33 |     await page.waitForTimeout(3000);
  34 | 
  35 |     await page.locator('.section-tile').filter({ hasText: 'Formulation' }).click();
  36 |     await expect(page.locator('.modal')).toBeVisible();
  37 |     await page.waitForTimeout(500);
  38 |     const specCard2 = page.locator('.modal .card').filter({ hasText: 'Recipe Spec' });
  39 |     const heatLabel2 = specCard2.locator('.label-cap').filter({ hasText: 'Heat' });
  40 |     const heatBox2 = heatLabel2.locator('xpath=..');
  41 |     const heatAfter = heatBox2.locator('.num-input input');
  42 |     const val = await heatAfter.inputValue();
  43 |     expect(val).toBe('15000');
  44 | 
  45 |     await heatAfter.click();
  46 |     await heatAfter.fill('0');
  47 |     await heatAfter.press('Enter');
  48 |     await page.waitForTimeout(3000);
  49 |   });
  50 | 
  51 |   test('compliance status cycles on click and saves to DB', async ({ page }) => {
  52 |     await page.locator('.section-tile').filter({ hasText: 'Formulation' }).click();
  53 |     await expect(page.locator('.modal')).toBeVisible();
  54 |     await page.waitForTimeout(500);
  55 | 
  56 |     const safetyCard = page.locator('.modal .card').filter({ hasText: 'Food Safety' });
  57 |     const firstItem = safetyCard.locator('li').first();
  58 |     const statusPill = firstItem.locator('span.mono').last();
  59 |     const before = await statusPill.textContent() || '';
  60 |     await statusPill.click();
  61 |     await page.waitForTimeout(2000);
  62 | 
  63 |     const db: any = await getStore('formulation');
  64 |     expect(db.compliance[0].status).not.toBe(before);
  65 | 
  66 |     await statusPill.click();
  67 |     await page.waitForTimeout(2000);
  68 |   });
  69 | });
  70 | 
```