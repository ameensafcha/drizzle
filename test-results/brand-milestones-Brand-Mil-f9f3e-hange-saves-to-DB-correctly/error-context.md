# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: brand-milestones.spec.ts >> Brand & Milestones >> stage change saves to DB correctly
- Location: tests\brand-milestones.spec.ts:38:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Soft Launch"
Received: "Pre-launch"
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
            - button "● Soft Launch ▾" [ref=e21] [cursor=pointer]:
              - text: ● Soft Launch
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
    - img [ref=e136]
  - alert [ref=e139]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { getStore } from './db-utils';
  3  | 
  4  | test.describe('Brand & Milestones', () => {
  5  | 
  6  |   test.beforeEach(async ({ page }) => {
  7  |     await page.goto('/');
  8  |     await page.waitForLoadState('networkidle');
  9  |     await expect(page.locator('.display').filter({ hasText: "FOUNDER'S COCKPIT" }).first()).toBeVisible();
  10 |   });
  11 | 
  12 |   test('tagline edit saves to DB correctly', async ({ page }) => {
  13 |     const span = page.getByText('Hot honey, reimagined.').first();
  14 |     await span.click();
  15 |     await page.waitForTimeout(200);
  16 |     const inp = page.locator('input[type="text"]').first();
  17 |     await inp.fill('Test PW');
  18 |     await inp.press('Enter');
  19 |     await page.waitForTimeout(2000);
  20 | 
  21 |     const dbVal = await getStore('tagline');
  22 |     expect(dbVal).toBe('Test PW');
  23 | 
  24 |     await page.reload();
  25 |     await page.waitForLoadState('networkidle');
  26 |     await page.waitForTimeout(2000);
  27 |     await expect(page.getByText('Test PW').first()).toBeVisible();
  28 | 
  29 |     const span2 = page.getByText('Test PW').first();
  30 |     await span2.click();
  31 |     await page.waitForTimeout(200);
  32 |     const inp2 = page.locator('input[type="text"]').first();
  33 |     await inp2.fill('Hot honey, reimagined.');
  34 |     await inp2.press('Enter');
  35 |     await page.waitForTimeout(2000);
  36 |   });
  37 | 
  38 |   test('stage change saves to DB correctly', async ({ page }) => {
  39 |     await page.locator('button.chip').filter({ hasText: /Pre-launch/ }).click();
  40 |     await page.waitForTimeout(200);
  41 |     await page.getByText('Soft Launch').first().click();
  42 |     await page.waitForTimeout(2000);
  43 | 
  44 |     const dbVal = await getStore('stage');
> 45 |     expect(dbVal).toBe('Soft Launch');
     |                   ^ Error: expect(received).toBe(expected) // Object.is equality
  46 | 
  47 |     await page.reload();
  48 |     await page.waitForLoadState('networkidle');
  49 |     await page.waitForTimeout(2000);
  50 |     await expect(page.locator('button.chip').filter({ hasText: /Soft Launch/ }).first()).toBeVisible();
  51 | 
  52 |     await page.locator('button.chip').filter({ hasText: /Soft Launch/ }).click();
  53 |     await page.waitForTimeout(200);
  54 |     await page.getByText('Pre-launch').first().click();
  55 |     await page.waitForTimeout(2000);
  56 |   });
  57 | 
  58 |   test('milestone status click updates DB', async ({ page }) => {
  59 |     await page.locator('.section-tile').filter({ hasText: 'Brand & Milestones' }).click();
  60 |     await expect(page.locator('.modal')).toBeVisible();
  61 |     const firstPill = page.locator('.modal li').first().locator('span.mono').last();
  62 |     const before = await firstPill.textContent() || '';
  63 |     await firstPill.click();
  64 |     await page.waitForTimeout(2000);
  65 |     await page.keyboard.press('Escape');
  66 | 
  67 |     const dbMilestones: any[] = await getStore('milestones');
  68 | 
  69 |     expect(Array.isArray(dbMilestones)).toBe(true);
  70 |     expect(dbMilestones.length).toBeGreaterThanOrEqual(17);
  71 |     expect(dbMilestones[0].status).not.toBe(before);
  72 |   });
  73 | 
  74 |   test('milestones modal shows 17 items', async ({ page }) => {
  75 |     await page.locator('.section-tile').filter({ hasText: 'Brand & Milestones' }).click();
  76 |     await expect(page.locator('.modal')).toBeVisible();
  77 |     await expect(page.locator('.modal li')).toHaveCount(17);
  78 |     await page.keyboard.press('Escape');
  79 |   });
  80 | 
  81 |   test('reset updates DB (milestones status cleared)', async ({ page }) => {
  82 |     page.on('dialog', dialog => dialog.accept());
  83 |     await page.locator('button.btn.ghost').filter({ hasText: 'Reset Defaults' }).click();
  84 |     await page.waitForTimeout(2000);
  85 | 
  86 |     const dbMilestones: any[] = await getStore('milestones');
  87 |     if (dbMilestones && dbMilestones.length > 0) {
  88 |       const doneCount = dbMilestones.filter((m: any) => m.status === 'Done').length;
  89 |       expect(doneCount).toBe(0);
  90 |     }
  91 |   });
  92 | });
  93 | 
```