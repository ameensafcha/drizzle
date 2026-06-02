# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: formulation.spec.ts >> Formulation >> spec value edit saves to DB and reloads
- Location: tests\formulation.spec.ts:12:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - img
      - img
      - generic [ref=e4]:
        - generic [ref=e5]:
          - generic [ref=e6]:
            - generic [ref=e7]: DRIZZLE
            - generic [ref=e8]: "& SAUCE"
          - generic [ref=e9]:
            - generic [ref=e10]: Tagline
            - generic "Click to edit" [ref=e11]: Test PW
          - generic [ref=e12]:
            - generic [ref=e13]: 📍 Khobar, KSA
            - generic [ref=e14]: •
            - generic [ref=e15]: "Launch: 2026"
            - generic [ref=e16]: •
            - generic [ref=e17]: Founder's Cockpit
        - generic [ref=e18]:
          - generic [ref=e19]:
            - generic [ref=e20]: Current Stage
            - button "● Pre-launch ▾" [ref=e21] [cursor=pointer]:
              - text: ● Pre-launch
              - generic [ref=e22]: ▾
          - button "↺ Reset Defaults" [ref=e23] [cursor=pointer]
          - button "Toggle theme" [ref=e24] [cursor=pointer]:
            - generic [ref=e26]: ☾
            - generic [ref=e27]: DARK
    - generic [ref=e28]:
      - generic [ref=e29]:
        - img
        - generic [ref=e30]: Retail Price
        - generic [ref=e32]: 0 SAR
        - generic [ref=e33]: per bottle · 240ml
      - generic [ref=e34]:
        - generic [ref=e35]: Cost Per Bottle
        - generic [ref=e37]: 0.00 SAR
        - generic [ref=e38]: all-in COGS
      - generic [ref=e39]:
        - generic [ref=e40]: Gross Margin
        - generic [ref=e42]: 0.0%
        - generic [ref=e43]: below floor
      - generic [ref=e44]:
        - generic [ref=e45]: Break-Even
        - generic [ref=e47]: — bot
        - generic [ref=e48]: bottles per month
    - generic [ref=e49]: FOUNDER'S COCKPIT
    - generic [ref=e50]:
      - button "§ 01 Brand & Milestones Hot honey · 240ml · D2C · Khobar 2026 0% of milestones done 0 of 17 complete →" [ref=e51] [cursor=pointer]:
        - generic [ref=e52]: § 01
        - generic [ref=e53]: Brand & Milestones
        - generic [ref=e54]: Hot honey · 240ml · D2C · Khobar 2026
        - generic [ref=e55]:
          - generic [ref=e56]: 0%
          - generic [ref=e57]: of milestones done
        - generic [ref=e59]:
          - generic [ref=e60]: 0 of 17 complete
          - generic [ref=e61]: →
      - button "§ 02 Unit Economics Ingredients, packaging, pricing, break-even. 0.0% gross margin break-even · — →" [ref=e62] [cursor=pointer]:
        - generic [ref=e63]: § 02
        - generic [ref=e64]: Unit Economics
        - generic [ref=e65]: Ingredients, packaging, pricing, break-even.
        - generic [ref=e66]:
          - generic [ref=e67]: 0.0%
          - generic [ref=e68]: gross margin
        - generic [ref=e70]:
          - generic [ref=e71]: break-even · —
          - generic [ref=e72]: →
      - button "§ 03 Formulation Recipe spec sheet, iteration log, SFDA compliance. current recipe 0 of 8 safety items done →" [ref=e73] [cursor=pointer]:
        - generic [ref=e74]: § 03
        - generic [ref=e75]: Formulation
        - generic [ref=e76]: Recipe spec sheet, iteration log, SFDA compliance.
        - generic [ref=e78]: current recipe
        - generic [ref=e80]:
          - generic [ref=e81]: 0 of 8 safety items done
          - generic [ref=e82]: →
      - button "§ 04 Design Files Asset tracker across 5 disciplines. 0 of 20 final 0 in review →" [ref=e83] [cursor=pointer]:
        - generic [ref=e84]: § 04
        - generic [ref=e85]: Design Files
        - generic [ref=e86]: Asset tracker across 5 disciplines.
        - generic [ref=e87]:
          - generic [ref=e88]: "0"
          - generic [ref=e89]: of 20 final
        - generic [ref=e91]:
          - generic [ref=e92]: 0 in review
          - generic [ref=e93]: →
      - button "§ 05 Social Media 4 channels · content pillars · calendar · pipeline. 0 total followers 0 posts/mo · 0 influencers signed →" [ref=e94] [cursor=pointer]:
        - generic [ref=e95]: § 05
        - generic [ref=e96]: Social Media
        - generic [ref=e97]: 4 channels · content pillars · calendar · pipeline.
        - generic [ref=e98]:
          - generic [ref=e99]: "0"
          - generic [ref=e100]: total followers
        - generic [ref=e102]:
          - generic [ref=e103]: 0 posts/mo · 0 influencers signed
          - generic [ref=e104]: →
      - button "§ 06 Sauce Lab Next sauces queued after hot honey ships. 9 ideas tracked 0 approved · 0 in pipeline →" [ref=e105] [cursor=pointer]:
        - generic [ref=e106]: § 06
        - generic [ref=e107]: Sauce Lab
        - generic [ref=e108]: Next sauces queued after hot honey ships.
        - generic [ref=e109]:
          - generic [ref=e110]: "9"
          - generic [ref=e111]: ideas tracked
        - generic [ref=e113]:
          - generic [ref=e114]: 0 approved · 0 in pipeline
          - generic [ref=e115]: →
      - button "§ 07 Contacts Editable rolodex — suppliers, stockists & advisors. 0 contacts 0 active relationships →" [ref=e116] [cursor=pointer]:
        - generic [ref=e117]: § 07
        - generic [ref=e118]: Contacts
        - generic [ref=e119]: Editable rolodex — suppliers, stockists & advisors.
        - generic [ref=e120]:
          - generic [ref=e121]: "0"
          - generic [ref=e122]: contacts
        - generic [ref=e124]:
          - generic [ref=e125]: 0 active relationships
          - generic [ref=e126]: →
    - generic [ref=e127]:
      - generic [ref=e128]: Drizzle & Sauce · founder's cockpit · 2026
      - generic [ref=e129]: ● neon connected
  - generic: ✦ saved
  - button "Open Next.js Dev Tools" [ref=e135] [cursor=pointer]:
    - generic [ref=e138]:
      - text: Compiling
      - generic [ref=e139]:
        - generic [ref=e140]: .
        - generic [ref=e141]: .
        - generic [ref=e142]: .
  - alert [ref=e143]
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
  9  |     await expect(page.locator('.section-tile').filter({ hasText: 'Formulation' }).first()).toBeVisible();
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
> 32 |     await page.waitForLoadState('networkidle');
     |                ^ Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
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