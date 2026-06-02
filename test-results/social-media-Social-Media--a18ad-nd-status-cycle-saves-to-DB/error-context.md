# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: social-media.spec.ts >> Social Media >> add influencer with edit and status cycle saves to DB
- Location: tests\social-media.spec.ts:57:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "@testinfluencer"
Received: ""
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
        - generic [ref=e32]: 35 SAR
        - generic [ref=e33]: per bottle · 240ml
      - generic [ref=e34]:
        - generic [ref=e35]: Cost Per Bottle
        - generic [ref=e37]: 0.00 SAR
        - generic [ref=e38]: all-in COGS
      - generic [ref=e39]:
        - generic [ref=e40]: Gross Margin
        - generic [ref=e42]: 100.0%
        - generic [ref=e43]: healthy
      - generic [ref=e44]:
        - generic [ref=e45]: Break-Even
        - generic [ref=e47]: 0 bot
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
      - button "§ 02 Unit Economics Ingredients, packaging, pricing, break-even. 100.0% gross margin break-even · 0 bot/mo →" [ref=e62] [cursor=pointer]:
        - generic [ref=e63]: § 02
        - generic [ref=e64]: Unit Economics
        - generic [ref=e65]: Ingredients, packaging, pricing, break-even.
        - generic [ref=e66]:
          - generic [ref=e67]: 100.0%
          - generic [ref=e68]: gross margin
        - generic [ref=e71]:
          - generic [ref=e72]: break-even · 0 bot/mo
          - generic [ref=e73]: →
      - button "§ 03 Formulation Recipe spec sheet, iteration log, SFDA compliance. current recipe 0 of 8 safety items done →" [ref=e74] [cursor=pointer]:
        - generic [ref=e75]: § 03
        - generic [ref=e76]: Formulation
        - generic [ref=e77]: Recipe spec sheet, iteration log, SFDA compliance.
        - generic [ref=e79]: current recipe
        - generic [ref=e81]:
          - generic [ref=e82]: 0 of 8 safety items done
          - generic [ref=e83]: →
      - button "§ 04 Design Files Asset tracker across 5 disciplines. 0 of 20 final 0 in review →" [ref=e84] [cursor=pointer]:
        - generic [ref=e85]: § 04
        - generic [ref=e86]: Design Files
        - generic [ref=e87]: Asset tracker across 5 disciplines.
        - generic [ref=e88]:
          - generic [ref=e89]: "0"
          - generic [ref=e90]: of 20 final
        - generic [ref=e92]:
          - generic [ref=e93]: 0 in review
          - generic [ref=e94]: →
      - button "§ 05 Social Media 4 channels · content pillars · calendar · pipeline. 0 total followers 0 posts/mo · 0 influencers signed →" [ref=e95] [cursor=pointer]:
        - generic [ref=e96]: § 05
        - generic [ref=e97]: Social Media
        - generic [ref=e98]: 4 channels · content pillars · calendar · pipeline.
        - generic [ref=e99]:
          - generic [ref=e100]: "0"
          - generic [ref=e101]: total followers
        - generic [ref=e103]:
          - generic [ref=e104]: 0 posts/mo · 0 influencers signed
          - generic [ref=e105]: →
      - button "§ 06 Sauce Lab Next sauces queued after hot honey ships. 9 ideas tracked 0 approved · 0 in pipeline →" [ref=e106] [cursor=pointer]:
        - generic [ref=e107]: § 06
        - generic [ref=e108]: Sauce Lab
        - generic [ref=e109]: Next sauces queued after hot honey ships.
        - generic [ref=e110]:
          - generic [ref=e111]: "9"
          - generic [ref=e112]: ideas tracked
        - generic [ref=e114]:
          - generic [ref=e115]: 0 approved · 0 in pipeline
          - generic [ref=e116]: →
      - button "§ 07 Contacts Editable rolodex — suppliers, stockists & advisors. 0 contacts 0 active relationships →" [ref=e117] [cursor=pointer]:
        - generic [ref=e118]: § 07
        - generic [ref=e119]: Contacts
        - generic [ref=e120]: Editable rolodex — suppliers, stockists & advisors.
        - generic [ref=e121]:
          - generic [ref=e122]: "0"
          - generic [ref=e123]: contacts
        - generic [ref=e125]:
          - generic [ref=e126]: 0 active relationships
          - generic [ref=e127]: →
    - generic [ref=e129]:
      - generic [ref=e130]:
        - generic [ref=e131]: "05"
        - generic [ref=e132]: Social Media
        - generic [ref=e133]: channels · pillars · calendar · influencers
        - button "Close" [ref=e134] [cursor=pointer]: ✕
      - generic [ref=e135]:
        - generic [ref=e136]:
          - generic [ref=e137]:
            - generic [ref=e138]:
              - generic [ref=e139]: INSTAGRAM
              - generic [ref=e140]: ● Dormant
            - generic [ref=e141]: "@drizzleandsauce"
            - generic [ref=e142]:
              - generic [ref=e143]: "0"
              - generic [ref=e144]: followers · target 10,000
            - generic [ref=e146]:
              - generic [ref=e147]: 0 posts/mo
              - generic [ref=e148]: 0.0% eng
            - spinbutton [ref=e151]: "0"
          - generic [ref=e152]:
            - generic [ref=e153]:
              - generic [ref=e154]: TIKTOK
              - generic [ref=e155]: ● Dormant
            - generic [ref=e156]: "@drizzleandsauce"
            - generic [ref=e157]:
              - generic [ref=e158]: "0"
              - generic [ref=e159]: followers · target 25,000
            - generic [ref=e161]:
              - generic [ref=e162]: 0 posts/mo
              - generic [ref=e163]: 0.0% eng
            - spinbutton [ref=e166]: "0"
          - generic [ref=e167]:
            - generic [ref=e168]:
              - generic [ref=e169]: SNAPCHAT
              - generic [ref=e170]: ● Dormant
            - generic [ref=e171]: drizzleandsauce
            - generic [ref=e172]:
              - generic [ref=e173]: "0"
              - generic [ref=e174]: followers · target 5,000
            - generic [ref=e176]:
              - generic [ref=e177]: 0 posts/mo
              - generic [ref=e178]: 0.0% eng
            - spinbutton [ref=e181]: "0"
          - generic [ref=e182]:
            - generic [ref=e183]:
              - generic [ref=e184]: X
              - generic [ref=e185]: ● Dormant
            - generic [ref=e186]: "@drizzleandsauce"
            - generic [ref=e187]:
              - generic [ref=e188]: "0"
              - generic [ref=e189]: followers · target 2,000
            - generic [ref=e191]:
              - generic [ref=e192]: 0 posts/mo
              - generic [ref=e193]: 0.0% eng
            - spinbutton [ref=e196]: "0"
        - generic [ref=e197]:
          - generic [ref=e198]:
            - generic [ref=e199]:
              - generic [ref=e200]: Content Pillars
              - generic [ref=e201]: monthly mix
            - generic [ref=e202]:
              - generic [ref=e203]:
                - generic [ref=e204]:
                  - generic [ref=e205]: Mascot Lore
                  - generic [ref=e206]: 0%
                - generic [ref=e208]: rubberhose shorts, character moments, world-building
              - generic [ref=e209]:
                - generic [ref=e210]:
                  - generic [ref=e211]: Heat Tests
                  - generic [ref=e212]: 0%
                - generic [ref=e214]: founder + locals trying the sauce, reaction reels
              - generic [ref=e215]:
                - generic [ref=e216]:
                  - generic [ref=e217]: Pairings & Recipes
                  - generic [ref=e218]: 0%
                - generic [ref=e220]: food creators using sauce on bites — UGC bait
              - generic [ref=e221]:
                - generic [ref=e222]:
                  - generic [ref=e223]: Behind the Hive
                  - generic [ref=e224]: 0%
                - generic [ref=e226]: factory floor, formulation diary, sourcing trips
          - generic [ref=e227]:
            - generic [ref=e228]:
              - generic [ref=e229]: Content Calendar
              - generic [ref=e230]: next 2 weeks
            - generic [ref=e232]: NO ENTRIES YET
            - button "+ Add calendar entry" [ref=e233] [cursor=pointer]
        - generic [ref=e234]:
          - generic [ref=e235]:
            - generic [ref=e236]: Influencer Pipeline
            - generic [ref=e237]: 0 signed · 1 in pipeline
          - generic [ref=e239]:
            - generic [ref=e240]: "@testinfluencer"
            - generic [ref=e241]: followers
            - generic [ref=e242]: deal
            - button "In Progress" [active] [ref=e243] [cursor=pointer]
            - button "✕" [ref=e244] [cursor=pointer]
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
  44 |     await page.waitForTimeout(2000);
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
> 82 |     expect(added.name).toBe('@testinfluencer');
     |                        ^ Error: expect(received).toBe(expected) // Object.is equality
  83 |     expect(added.status).not.toBe(before);
  84 | 
  85 |     const deleteBtn = pipelineCard.locator('button').filter({ hasText: '✕' }).last();
  86 |     await deleteBtn.click();
  87 |     await page.waitForTimeout(2000);
  88 |   });
  89 | });
  90 | 
```