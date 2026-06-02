# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contacts.spec.ts >> Contacts >> edit contact company name saves to DB
- Location: tests\contacts.spec.ts:32:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 60000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
      - button "§ 07 Contacts Editable rolodex — suppliers, stockists & advisors. 1 contacts 0 active relationships →" [ref=e116] [cursor=pointer]:
        - generic [ref=e117]: § 07
        - generic [ref=e118]: Contacts
        - generic [ref=e119]: Editable rolodex — suppliers, stockists & advisors.
        - generic [ref=e120]:
          - generic [ref=e121]: "1"
          - generic [ref=e122]: contacts
        - generic [ref=e124]:
          - generic [ref=e125]: 0 active relationships
          - generic [ref=e126]: →
    - generic [ref=e128]:
      - generic [ref=e129]:
        - generic [ref=e130]: "07"
        - generic [ref=e131]: Contacts
        - generic [ref=e132]: vendors · packaging · distributors · retailers · key contacts
        - button "Close" [ref=e133] [cursor=pointer]: ✕
      - generic [ref=e134]:
        - generic [ref=e135]:
          - button "Vendors 1" [ref=e136] [cursor=pointer]:
            - text: Vendors
            - generic [ref=e137]: "1"
          - button "Packaging 0" [ref=e138] [cursor=pointer]:
            - text: Packaging
            - generic [ref=e139]: "0"
          - button "Distributors 0" [ref=e140] [cursor=pointer]:
            - text: Distributors
            - generic [ref=e141]: "0"
          - button "Retailers 0" [ref=e142] [cursor=pointer]:
            - text: Retailers
            - generic [ref=e143]: "0"
          - button "Key Contacts 0" [ref=e144] [cursor=pointer]:
            - text: Key Contacts
            - generic [ref=e145]: "0"
        - generic [ref=e146]:
          - generic [ref=e147]: Vendors · 1 rows · ingredients & raw materials
          - generic [ref=e148]: 1 contacts total
        - table [ref=e150]:
          - rowgroup [ref=e151]:
            - row "# Company / Name Contact Phone Email City Status Notes" [ref=e152]:
              - columnheader "#" [ref=e153]
              - columnheader "Company / Name" [ref=e154]
              - columnheader "Contact" [ref=e155]
              - columnheader "Phone" [ref=e156]
              - columnheader "Email" [ref=e157]
              - columnheader "City" [ref=e158]
              - columnheader "Status" [ref=e159]
              - columnheader "Notes" [ref=e160]
              - columnheader [ref=e161]
          - rowgroup [ref=e162]:
            - row "1 Lead ✕" [ref=e163]:
              - cell "1" [ref=e164]
              - cell [ref=e165]:
                - textbox "Company / name" [ref=e166]
              - cell [ref=e167]:
                - textbox "—" [ref=e168]
              - cell [ref=e169]:
                - textbox "—" [ref=e170]
              - cell [ref=e171]:
                - textbox "—" [ref=e172]
              - cell [ref=e173]:
                - textbox "—" [ref=e174]
              - cell "Lead" [ref=e175]:
                - button "Lead" [ref=e176] [cursor=pointer]
              - cell [ref=e177]:
                - textbox "—" [ref=e178]
              - cell "✕" [ref=e179]:
                - button "✕" [ref=e180] [cursor=pointer]
        - button "+ Add row to Vendors" [active] [ref=e181] [cursor=pointer]
    - generic [ref=e182]:
      - generic [ref=e183]: Drizzle & Sauce · founder's cockpit · 2026
      - generic [ref=e184]: ● neon connected
  - generic: ✦ saved
  - button "Open Next.js Dev Tools" [ref=e190] [cursor=pointer]:
    - img [ref=e191]
  - alert [ref=e194]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { getStore } from './db-utils';
  3  | 
  4  | test.describe('Contacts', () => {
  5  | 
  6  |   test.beforeEach(async ({ page }) => {
  7  |     await page.goto('/');
  8  |     await page.waitForLoadState('networkidle');
  9  |     await expect(page.locator('.section-tile').filter({ hasText: 'Contacts' }).first()).toBeVisible();
  10 |   });
  11 | 
  12 |   test('add contact row saves to DB', async ({ page }) => {
  13 |     await page.locator('.section-tile').filter({ hasText: 'Contacts' }).click();
  14 |     await expect(page.locator('.modal')).toBeVisible();
  15 |     await page.waitForTimeout(500);
  16 | 
  17 |     const beforeDb: any = await getStore('contacts');
  18 |     const beforeVendors = (beforeDb.vendors || []).length;
  19 | 
  20 |     const addBtn = page.locator('.modal .sheet-addrow');
  21 |     await addBtn.click();
  22 |     await page.waitForTimeout(2000);
  23 | 
  24 |     const db: any = await getStore('contacts');
  25 |     expect(db.vendors.length).toBe(beforeVendors + 1);
  26 | 
  27 |     const delBtn = page.locator('.modal .sheet-del').last();
  28 |     await delBtn.click();
  29 |     await page.waitForTimeout(2000);
  30 |   });
  31 | 
  32 |   test('edit contact company name saves to DB', async ({ page }) => {
  33 |     await page.locator('.section-tile').filter({ hasText: 'Contacts' }).click();
  34 |     await expect(page.locator('.modal')).toBeVisible();
  35 |     await page.waitForTimeout(500);
  36 | 
  37 |     const addBtn = page.locator('.modal .sheet-addrow');
  38 |     await addBtn.click();
> 39 |     await page.waitForTimeout(1000);
     |                ^ Error: page.waitForTimeout: Test timeout of 60000ms exceeded.
  40 | 
  41 |     const firstCell = page.locator('.modal .sheet-cell-input').first();
  42 |     await firstCell.click();
  43 |     await firstCell.fill('Test Company');
  44 |     await firstCell.press('Tab');
  45 |     await page.waitForTimeout(2000);
  46 | 
  47 |     const db: any = await getStore('contacts');
  48 |     const added = db.vendors[db.vendors.length - 1];
  49 |     expect(added.company).toBe('Test Company');
  50 | 
  51 |     const delBtn = page.locator('.modal .sheet-del').last();
  52 |     await delBtn.click();
  53 |     await page.waitForTimeout(2000);
  54 |   });
  55 | 
  56 |   test('contact status cycles on click and saves to DB', async ({ page }) => {
  57 |     await page.locator('.section-tile').filter({ hasText: 'Contacts' }).click();
  58 |     await expect(page.locator('.modal')).toBeVisible();
  59 |     await page.waitForTimeout(500);
  60 | 
  61 |     const addBtn = page.locator('.modal .sheet-addrow');
  62 |     await addBtn.click();
  63 |     await page.waitForTimeout(1000);
  64 | 
  65 |     const statusBtn = page.locator('.modal .sheet-status').last();
  66 |     const before = await statusBtn.textContent() || '';
  67 |     await statusBtn.click();
  68 |     await page.waitForTimeout(2000);
  69 | 
  70 |     const db: any = await getStore('contacts');
  71 |     const added = db.vendors[db.vendors.length - 1];
  72 |     expect(added.status).not.toBe(before);
  73 | 
  74 |     const delBtn = page.locator('.modal .sheet-del').last();
  75 |     await delBtn.click();
  76 |     await page.waitForTimeout(2000);
  77 |   });
  78 | });
  79 | 
```