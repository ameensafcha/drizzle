# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: social-media.spec.ts >> Social Media >> add and delete calendar entry persists to DB
- Location: tests\social-media.spec.ts:35:7

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
    - generic [ref=e128]:
      - generic [ref=e129]:
        - generic [ref=e130]: "05"
        - generic [ref=e131]: Social Media
        - generic [ref=e132]: channels · pillars · calendar · influencers
        - button "Close" [ref=e133] [cursor=pointer]: ✕
      - generic [ref=e134]:
        - generic [ref=e135]:
          - generic [ref=e136]:
            - generic [ref=e137]:
              - generic [ref=e138]: INSTAGRAM
              - generic [ref=e139]: ● Dormant
            - generic [ref=e140]: "@drizzleandsauce"
            - generic [ref=e141]:
              - generic [ref=e142]: "0"
              - generic [ref=e143]: followers · target 10,000
            - generic [ref=e145]:
              - generic [ref=e146]: 0 posts/mo
              - generic [ref=e147]: 0.0% eng
            - spinbutton [ref=e150]: "0"
          - generic [ref=e151]:
            - generic [ref=e152]:
              - generic [ref=e153]: TIKTOK
              - generic [ref=e154]: ● Dormant
            - generic [ref=e155]: "@drizzleandsauce"
            - generic [ref=e156]:
              - generic [ref=e157]: "0"
              - generic [ref=e158]: followers · target 25,000
            - generic [ref=e160]:
              - generic [ref=e161]: 0 posts/mo
              - generic [ref=e162]: 0.0% eng
            - spinbutton [ref=e165]: "0"
          - generic [ref=e166]:
            - generic [ref=e167]:
              - generic [ref=e168]: SNAPCHAT
              - generic [ref=e169]: ● Dormant
            - generic [ref=e170]: drizzleandsauce
            - generic [ref=e171]:
              - generic [ref=e172]: "0"
              - generic [ref=e173]: followers · target 5,000
            - generic [ref=e175]:
              - generic [ref=e176]: 0 posts/mo
              - generic [ref=e177]: 0.0% eng
            - spinbutton [ref=e180]: "0"
          - generic [ref=e181]:
            - generic [ref=e182]:
              - generic [ref=e183]: X
              - generic [ref=e184]: ● Dormant
            - generic [ref=e185]: "@drizzleandsauce"
            - generic [ref=e186]:
              - generic [ref=e187]: "0"
              - generic [ref=e188]: followers · target 2,000
            - generic [ref=e190]:
              - generic [ref=e191]: 0 posts/mo
              - generic [ref=e192]: 0.0% eng
            - spinbutton [ref=e195]: "0"
        - generic [ref=e196]:
          - generic [ref=e197]:
            - generic [ref=e198]:
              - generic [ref=e199]: Content Pillars
              - generic [ref=e200]: monthly mix
            - generic [ref=e201]:
              - generic [ref=e202]:
                - generic [ref=e203]:
                  - generic [ref=e204]: Mascot Lore
                  - generic [ref=e205]: 0%
                - generic [ref=e207]: rubberhose shorts, character moments, world-building
              - generic [ref=e208]:
                - generic [ref=e209]:
                  - generic [ref=e210]: Heat Tests
                  - generic [ref=e211]: 0%
                - generic [ref=e213]: founder + locals trying the sauce, reaction reels
              - generic [ref=e214]:
                - generic [ref=e215]:
                  - generic [ref=e216]: Pairings & Recipes
                  - generic [ref=e217]: 0%
                - generic [ref=e219]: food creators using sauce on bites — UGC bait
              - generic [ref=e220]:
                - generic [ref=e221]:
                  - generic [ref=e222]: Behind the Hive
                  - generic [ref=e223]: 0%
                - generic [ref=e225]: factory floor, formulation diary, sourcing trips
          - generic [ref=e226]:
            - generic [ref=e227]:
              - generic [ref=e228]: Content Calendar
              - generic [ref=e229]: next 2 weeks
            - generic [ref=e231]:
              - generic [ref=e233] [cursor=pointer]: May 28
              - generic [ref=e234]: platform
              - generic [ref=e235]: description
              - button "Not Started" [ref=e236] [cursor=pointer]
              - button "✕" [ref=e237] [cursor=pointer]
            - button "+ Add calendar entry" [active] [ref=e238] [cursor=pointer]
        - generic [ref=e239]:
          - generic [ref=e240]:
            - generic [ref=e241]: Influencer Pipeline
            - generic [ref=e242]: 0 signed · 0 in pipeline
          - generic [ref=e244]: NO INFLUENCERS YET
          - button "+ Add influencer" [ref=e245] [cursor=pointer]
    - generic [ref=e246]:
      - generic [ref=e247]: Drizzle & Sauce · founder's cockpit · 2026
      - generic [ref=e248]: ● neon connected
  - generic: ✦ saved
  - button "Open Next.js Dev Tools" [ref=e254] [cursor=pointer]:
    - img [ref=e255]
  - alert [ref=e258]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { getStore } from './db-utils';
  3  | 
  4  | test.describe('Social Media', () => {
  5  | 
  6  |   test.beforeEach(async ({ page }) => {
  7  |     await page.goto('/');
  8  |     await page.waitForLoadState('networkidle');
  9  |     await expect(page.locator('.section-tile').filter({ hasText: 'Social Media' }).first()).toBeVisible();
  10 |   });
  11 | 
  12 |   test('follower count edit saves to DB', async ({ page }) => {
  13 |     await page.locator('.section-tile').filter({ hasText: 'Social Media' }).click();
  14 |     await expect(page.locator('.modal')).toBeVisible();
  15 |     await page.waitForTimeout(500);
  16 | 
  17 |     // Edit followers in first channel card
  18 |     const channelCards = page.locator('.modal .grid-4 .card');
  19 |     const firstCard = channelCards.first();
  20 |     const input = firstCard.locator('.num-input input');
  21 |     await input.click();
  22 |     await input.fill('5000');
  23 |     await input.press('Enter');
  24 |     await page.waitForTimeout(3000);
  25 | 
  26 |     const db: any = await getStore('social');
  27 |     expect(db.channels[0].followers).toBe(5000);
  28 | 
  29 |     await input.click();
  30 |     await input.fill('0');
  31 |     await input.press('Enter');
  32 |     await page.waitForTimeout(3000);
  33 |   });
  34 | 
  35 |   test('add and delete calendar entry persists to DB', async ({ page }) => {
  36 |     await page.locator('.section-tile').filter({ hasText: 'Social Media' }).click();
  37 |     await expect(page.locator('.modal')).toBeVisible();
  38 |     await page.waitForTimeout(500);
  39 | 
  40 |     const calendarCard = page.locator('.modal .card').filter({ hasText: 'Content Calendar' });
  41 |     const beforeLen = (await getStore('social')).calendar.length;
  42 | 
  43 |     await page.getByText('+ Add calendar entry').click();
> 44 |     await page.waitForTimeout(2000);
     |                ^ Error: page.waitForTimeout: Test timeout of 60000ms exceeded.
  45 | 
  46 |     let db: any = await getStore('social');
  47 |     expect(db.calendar.length).toBe(beforeLen + 1);
  48 | 
  49 |     const deleteBtn = calendarCard.locator('button').filter({ hasText: '✕' }).last();
  50 |     await deleteBtn.click();
  51 |     await page.waitForTimeout(2000);
  52 | 
  53 |     db = await getStore('social');
  54 |     expect(db.calendar.length).toBe(beforeLen);
  55 |   });
  56 | 
  57 |   test('add influencer with edit and status cycle saves to DB', async ({ page }) => {
  58 |     await page.locator('.section-tile').filter({ hasText: 'Social Media' }).click();
  59 |     await expect(page.locator('.modal')).toBeVisible();
  60 |     await page.waitForTimeout(500);
  61 | 
  62 |     const pipelineCard = page.locator('.modal .card').filter({ hasText: 'Influencer Pipeline' });
  63 | 
  64 |     await page.getByText('+ Add influencer').click();
  65 |     await page.waitForTimeout(1000);
  66 | 
  67 |     const nameSpan = pipelineCard.locator('span').filter({ hasText: 'name' }).first();
  68 |     await nameSpan.click();
  69 |     await page.waitForTimeout(300);
  70 |     const nameInput = pipelineCard.locator('input[type="text"]').first();
  71 |     await nameInput.fill('@testinfluencer');
  72 |     await nameInput.press('Enter');
  73 |     await page.waitForTimeout(2000);
  74 | 
  75 |     const statusBtn = pipelineCard.locator('button').filter({ hasText: /Not Started|In Progress|Done/ }).last();
  76 |     const before = await statusBtn.textContent() || '';
  77 |     await statusBtn.click();
  78 |     await page.waitForTimeout(2000);
  79 | 
  80 |     const db: any = await getStore('social');
  81 |     const added = db.influencers[db.influencers.length - 1];
  82 |     expect(added.name).toBe('@testinfluencer');
  83 |     expect(added.status).not.toBe(before);
  84 | 
  85 |     const deleteBtn = pipelineCard.locator('button').filter({ hasText: '✕' }).last();
  86 |     await deleteBtn.click();
  87 |     await page.waitForTimeout(2000);
  88 |   });
  89 | });
  90 | 
```