# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sauce-lab.spec.ts >> Sauce Lab >> sauce status cycles on click and saves to DB
- Location: tests\sauce-lab.spec.ts:12:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.modal [class*="grid"] > div').first().locator('button.mono')

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
            - generic "Click to edit" [ref=e11]: Hot honey, reimagined.
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
      - button "§ 06 Sauce Lab Next sauces queued after hot honey ships. 9 ideas tracked 0 approved · 0 in pipeline →" [active] [ref=e105] [cursor=pointer]:
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
        - generic [ref=e130]: "06"
        - generic [ref=e131]: Sauce Lab
        - generic [ref=e132]: r&d pipeline · future skus
        - button "Close" [ref=e133] [cursor=pointer]: ✕
      - generic [ref=e134]:
        - generic [ref=e135]:
          - generic [ref=e136]: Filter
          - button "All 9" [ref=e137] [cursor=pointer]
          - button "Concept 9" [ref=e138] [cursor=pointer]
          - button "In R&D 0" [ref=e139] [cursor=pointer]
          - button "Tested 0" [ref=e140] [cursor=pointer]
          - button "Approved 0" [ref=e141] [cursor=pointer]
          - button "Shelved 0" [ref=e142] [cursor=pointer]
        - generic [ref=e143]: 🍯 LAB NOTES SKUs queued after hot honey ships. Heat = chili dots (0–5), Score = personal conviction. Tap status pill, heat dots, or stars to update.
        - generic [ref=e144]:
          - generic [ref=e145]:
            - generic [ref=e147]:
              - generic [ref=e148]: Smoked Sidr
              - button "Concept" [ref=e149] [cursor=pointer]
            - generic [ref=e150]: mesquite-smoked sidr honey, low heat
            - generic [ref=e151]:
              - generic [ref=e152]: smoky
              - generic [ref=e153]: dark
              - generic [ref=e154]: rich
            - generic [ref=e155]:
              - generic [ref=e156]:
                - generic [ref=e157]: Heat
                - generic [ref=e158]:
                  - generic "1 / 5" [ref=e159] [cursor=pointer]
                  - generic "2 / 5" [ref=e160] [cursor=pointer]
                  - generic "3 / 5" [ref=e161] [cursor=pointer]
                  - generic "4 / 5" [ref=e162] [cursor=pointer]
                  - generic "5 / 5" [ref=e163] [cursor=pointer]
              - generic [ref=e164]:
                - generic [ref=e165]: Score
                - generic [ref=e166] [cursor=pointer]:
                  - generic [ref=e167]: ★
                  - generic [ref=e168]: ★
                  - generic [ref=e169]: ★
                  - generic [ref=e170]: ★
                  - generic [ref=e171]: ★
            - generic [ref=e172]: BBQ + cheese pairings. Pitches to grill culture.
            - generic [ref=e174]: est. launch · Q4 2026
          - generic [ref=e175]:
            - generic [ref=e177]:
              - generic [ref=e178]: Sumac Drip
              - button "Concept" [ref=e179] [cursor=pointer]
            - generic [ref=e180]: sumac, lemon zest, fennel honey
            - generic [ref=e181]:
              - generic [ref=e182]: bright
              - generic [ref=e183]: tart
              - generic [ref=e184]: citrus
            - generic [ref=e185]:
              - generic [ref=e186]:
                - generic [ref=e187]: Heat
                - generic [ref=e188]:
                  - generic "1 / 5" [ref=e189] [cursor=pointer]
                  - generic "2 / 5" [ref=e190] [cursor=pointer]
                  - generic "3 / 5" [ref=e191] [cursor=pointer]
                  - generic "4 / 5" [ref=e192] [cursor=pointer]
                  - generic "5 / 5" [ref=e193] [cursor=pointer]
              - generic [ref=e194]:
                - generic [ref=e195]: Score
                - generic [ref=e196] [cursor=pointer]:
                  - generic [ref=e197]: ★
                  - generic [ref=e198]: ★
                  - generic [ref=e199]: ★
                  - generic [ref=e200]: ★
                  - generic [ref=e201]: ★
            - generic [ref=e202]: Bright + tart. Pairs with grilled fish and labneh.
            - generic [ref=e204]: est. launch · Q1 2027
          - generic [ref=e205]:
            - generic [ref=e207]:
              - generic [ref=e208]: Black Lime Bite
              - button "Concept" [ref=e209] [cursor=pointer]
            - generic [ref=e210]: omani black lime, dried hibiscus, medium heat
            - generic [ref=e211]:
              - generic [ref=e212]: sour
              - generic [ref=e213]: funky
              - generic [ref=e214]: floral
            - generic [ref=e215]:
              - generic [ref=e216]:
                - generic [ref=e217]: Heat
                - generic [ref=e218]:
                  - generic "1 / 5" [ref=e219] [cursor=pointer]
                  - generic "2 / 5" [ref=e220] [cursor=pointer]
                  - generic "3 / 5" [ref=e221] [cursor=pointer]
                  - generic "4 / 5" [ref=e222] [cursor=pointer]
                  - generic "5 / 5" [ref=e223] [cursor=pointer]
              - generic [ref=e224]:
                - generic [ref=e225]: Score
                - generic [ref=e226] [cursor=pointer]:
                  - generic [ref=e227]: ★
                  - generic [ref=e228]: ★
                  - generic [ref=e229]: ★
                  - generic [ref=e230]: ★
                  - generic [ref=e231]: ★
            - generic [ref=e232]: Loomi-forward funk. Could be a sleeper hit.
            - generic [ref=e234]: est. launch · Q2 2027
          - generic [ref=e235]:
            - generic [ref=e237]:
              - generic [ref=e238]: Cardamom Glaze
              - button "Concept" [ref=e239] [cursor=pointer]
            - generic [ref=e240]: green cardamom + rose, dessert-leaning
            - generic [ref=e241]:
              - generic [ref=e242]: floral
              - generic [ref=e243]: warm
              - generic [ref=e244]: dessert
            - generic [ref=e245]:
              - generic [ref=e246]:
                - generic [ref=e247]: Heat
                - generic [ref=e248]:
                  - generic "1 / 5" [ref=e249] [cursor=pointer]
                  - generic "2 / 5" [ref=e250] [cursor=pointer]
                  - generic "3 / 5" [ref=e251] [cursor=pointer]
                  - generic "4 / 5" [ref=e252] [cursor=pointer]
                  - generic "5 / 5" [ref=e253] [cursor=pointer]
              - generic [ref=e254]:
                - generic [ref=e255]: Score
                - generic [ref=e256] [cursor=pointer]:
                  - generic [ref=e257]: ★
                  - generic [ref=e258]: ★
                  - generic [ref=e259]: ★
                  - generic [ref=e260]: ★
                  - generic [ref=e261]: ★
            - generic [ref=e262]: Drizzle on baklava, ice cream, gahwa pairings.
            - generic [ref=e264]: est. launch · Q3 2027
          - generic [ref=e265]:
            - generic [ref=e267]:
              - generic [ref=e268]: Tabil Burn
              - button "Concept" [ref=e269] [cursor=pointer]
            - generic [ref=e270]: tunisian tabil + carolina reaper, extreme heat
            - generic [ref=e271]:
              - generic [ref=e272]: fiery
              - generic [ref=e273]: earthy
              - generic [ref=e274]: cumin
            - generic [ref=e275]:
              - generic [ref=e276]:
                - generic [ref=e277]: Heat
                - generic [ref=e278]:
                  - generic "1 / 5" [ref=e279] [cursor=pointer]
                  - generic "2 / 5" [ref=e280] [cursor=pointer]
                  - generic "3 / 5" [ref=e281] [cursor=pointer]
                  - generic "4 / 5" [ref=e282] [cursor=pointer]
                  - generic "5 / 5" [ref=e283] [cursor=pointer]
              - generic [ref=e284]:
                - generic [ref=e285]: Score
                - generic [ref=e286] [cursor=pointer]:
                  - generic [ref=e287]: ★
                  - generic [ref=e288]: ★
                  - generic [ref=e289]: ★
                  - generic [ref=e290]: ★
                  - generic [ref=e291]: ★
            - generic [ref=e292]: Limited 'fire' edition. Reaches the spice-fiend tribe.
            - generic [ref=e294]: est. launch · Q2 2027
          - generic [ref=e295]:
            - generic [ref=e297]:
              - generic [ref=e298]: Date Molasses Drizzle
              - button "Concept" [ref=e299] [cursor=pointer]
            - generic [ref=e300]: sticky dibs + aleppo pepper, mid heat
            - generic [ref=e301]:
              - generic [ref=e302]: sticky
              - generic [ref=e303]: deep
              - generic [ref=e304]: fruity
            - generic [ref=e305]:
              - generic [ref=e306]:
                - generic [ref=e307]: Heat
                - generic [ref=e308]:
                  - generic "1 / 5" [ref=e309] [cursor=pointer]
                  - generic "2 / 5" [ref=e310] [cursor=pointer]
                  - generic "3 / 5" [ref=e311] [cursor=pointer]
                  - generic "4 / 5" [ref=e312] [cursor=pointer]
                  - generic "5 / 5" [ref=e313] [cursor=pointer]
              - generic [ref=e314]:
                - generic [ref=e315]: Score
                - generic [ref=e316] [cursor=pointer]:
                  - generic [ref=e317]: ★
                  - generic [ref=e318]: ★
                  - generic [ref=e319]: ★
                  - generic [ref=e320]: ★
                  - generic [ref=e321]: ★
            - generic [ref=e322]: Heritage flavor — local-first storytelling angle.
            - generic [ref=e324]: est. launch · Q4 2026
          - generic [ref=e325]:
            - generic [ref=e327]:
              - generic [ref=e328]: Saffron Sting
              - button "Concept" [ref=e329] [cursor=pointer]
            - generic [ref=e330]: premium saffron honey + ghost pepper
            - generic [ref=e331]:
              - generic [ref=e332]: luxe
              - generic [ref=e333]: floral
              - generic [ref=e334]: fiery
            - generic [ref=e335]:
              - generic [ref=e336]:
                - generic [ref=e337]: Heat
                - generic [ref=e338]:
                  - generic "1 / 5" [ref=e339] [cursor=pointer]
                  - generic "2 / 5" [ref=e340] [cursor=pointer]
                  - generic "3 / 5" [ref=e341] [cursor=pointer]
                  - generic "4 / 5" [ref=e342] [cursor=pointer]
                  - generic "5 / 5" [ref=e343] [cursor=pointer]
              - generic [ref=e344]:
                - generic [ref=e345]: Score
                - generic [ref=e346] [cursor=pointer]:
                  - generic [ref=e347]: ★
                  - generic [ref=e348]: ★
                  - generic [ref=e349]: ★
                  - generic [ref=e350]: ★
                  - generic [ref=e351]: ★
            - generic [ref=e352]: Hero SKU at 2x price. Gift-box anchor.
            - generic [ref=e354]: est. launch · Q4 2027
          - generic [ref=e355]:
            - generic [ref=e357]:
              - generic [ref=e358]: Coffee Honey
              - button "Concept" [ref=e359] [cursor=pointer]
            - generic [ref=e360]: saudi qahwa infusion + ancho
            - generic [ref=e361]:
              - generic [ref=e362]: roasted
              - generic [ref=e363]: bitter
              - generic [ref=e364]: complex
            - generic [ref=e365]:
              - generic [ref=e366]:
                - generic [ref=e367]: Heat
                - generic [ref=e368]:
                  - generic "1 / 5" [ref=e369] [cursor=pointer]
                  - generic "2 / 5" [ref=e370] [cursor=pointer]
                  - generic "3 / 5" [ref=e371] [cursor=pointer]
                  - generic "4 / 5" [ref=e372] [cursor=pointer]
                  - generic "5 / 5" [ref=e373] [cursor=pointer]
              - generic [ref=e374]:
                - generic [ref=e375]: Score
                - generic [ref=e376] [cursor=pointer]:
                  - generic [ref=e377]: ★
                  - generic [ref=e378]: ★
                  - generic [ref=e379]: ★
                  - generic [ref=e380]: ★
                  - generic [ref=e381]: ★
            - generic [ref=e382]: Cafe collab opportunity. Cold brew drizzle.
            - generic [ref=e384]: est. launch · Q1 2028
          - generic [ref=e385]:
            - generic [ref=e387]:
              - generic [ref=e388]: Green Heat
              - button "Concept" [ref=e389] [cursor=pointer]
            - generic [ref=e390]: coriander, mint, jalapeño, lime honey
            - generic [ref=e391]:
              - generic [ref=e392]: herbal
              - generic [ref=e393]: fresh
              - generic [ref=e394]: zesty
            - generic [ref=e395]:
              - generic [ref=e396]:
                - generic [ref=e397]: Heat
                - generic [ref=e398]:
                  - generic "1 / 5" [ref=e399] [cursor=pointer]
                  - generic "2 / 5" [ref=e400] [cursor=pointer]
                  - generic "3 / 5" [ref=e401] [cursor=pointer]
                  - generic "4 / 5" [ref=e402] [cursor=pointer]
                  - generic "5 / 5" [ref=e403] [cursor=pointer]
              - generic [ref=e404]:
                - generic [ref=e405]: Score
                - generic [ref=e406] [cursor=pointer]:
                  - generic [ref=e407]: ★
                  - generic [ref=e408]: ★
                  - generic [ref=e409]: ★
                  - generic [ref=e410]: ★
                  - generic [ref=e411]: ★
            - generic [ref=e412]: Fresh + summery. Could power a seasonal drop.
            - generic [ref=e414]: est. launch · —
        - generic [ref=e415]:
          - generic [ref=e416]: 0 approved · 0 tested · 0 in r&d
          - generic [ref=e417]: avg score · 0.0 ★
    - generic [ref=e418]:
      - generic [ref=e419]: Drizzle & Sauce · founder's cockpit · 2026
      - generic [ref=e420]: ● neon connected
  - generic: ✦ saved
  - button "Open Next.js Dev Tools" [ref=e426] [cursor=pointer]:
    - img [ref=e427]
  - alert [ref=e430]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { getStore } from './db-utils';
  3  | 
  4  | test.describe('Sauce Lab', () => {
  5  | 
  6  |   test.beforeEach(async ({ page }) => {
  7  |     await page.goto('/');
  8  |     await page.waitForLoadState('networkidle');
  9  |     await expect(page.locator('.section-tile').filter({ hasText: 'Sauce Lab' }).first()).toBeVisible();
  10 |   });
  11 | 
  12 |   test('sauce status cycles on click and saves to DB', async ({ page }) => {
  13 |     await page.locator('.section-tile').filter({ hasText: 'Sauce Lab' }).click();
  14 |     await expect(page.locator('.modal')).toBeVisible();
  15 |     await page.waitForTimeout(500);
  16 | 
  17 |     const firstSauce = page.locator('.modal [class*="grid"] > div').first();
  18 |     const statusBtn = firstSauce.locator('button.mono');
> 19 |     const before = await statusBtn.textContent() || '';
     |                                    ^ Error: locator.textContent: Test timeout of 60000ms exceeded.
  20 |     await statusBtn.click();
  21 |     await page.waitForTimeout(2000);
  22 | 
  23 |     const db: any[] = await getStore('sauces');
  24 |     expect(db[0].status).not.toBe(before);
  25 |   });
  26 | 
  27 |   test('sauce heat dot click saves to DB', async ({ page }) => {
  28 |     await page.locator('.section-tile').filter({ hasText: 'Sauce Lab' }).click();
  29 |     await expect(page.locator('.modal')).toBeVisible();
  30 |     await page.waitForTimeout(500);
  31 | 
  32 |     const firstSauce = page.locator('.modal [class*="grid"] > div').first();
  33 |     const heatDot = firstSauce.locator('.heat-dot').first();
  34 |     const wasOn = await heatDot.getAttribute('class').then(c => c?.includes('on'));
  35 |     await heatDot.click();
  36 |     await page.waitForTimeout(2000);
  37 | 
  38 |     const db: any[] = await getStore('sauces');
  39 |     const heatAfter = db[0].heat;
  40 |     if (wasOn) expect(heatAfter).toBe(0);
  41 |     else expect(heatAfter).toBe(1);
  42 |   });
  43 | 
  44 |   test('sauce score star click saves to DB', async ({ page }) => {
  45 |     await page.locator('.section-tile').filter({ hasText: 'Sauce Lab' }).click();
  46 |     await expect(page.locator('.modal')).toBeVisible();
  47 |     await page.waitForTimeout(500);
  48 | 
  49 |     const firstSauce = page.locator('.modal [class*="grid"] > div').first();
  50 |     const firstStar = firstSauce.locator('.star').first();
  51 |     const wasOn = await firstStar.getAttribute('class').then(c => c?.includes('on'));
  52 |     await firstStar.click();
  53 |     await page.waitForTimeout(2000);
  54 | 
  55 |     const db: any[] = await getStore('sauces');
  56 |     if (wasOn) expect(db[0].score).toBe(0);
  57 |     else expect(db[0].score).toBe(1);
  58 |   });
  59 | 
  60 |   test('sauce filter works and shows correct count', async ({ page }) => {
  61 |     await page.locator('.section-tile').filter({ hasText: 'Sauce Lab' }).click();
  62 |     await expect(page.locator('.modal')).toBeVisible();
  63 |     await page.waitForTimeout(500);
  64 | 
  65 |     const db: any[] = await getStore('sauces');
  66 |     const conceptCount = db.filter((s: any) => s.status === 'Concept').length;
  67 |     const allBtn = page.locator('.modal .mono').filter({ hasText: 'All' }).first();
  68 |     await expect(allBtn).toBeVisible();
  69 | 
  70 |     const statusCount = page.locator('.modal .mono').filter({ hasText: /Concept|In R&D|Tested|Approved|Shelved/ }).first();
  71 |     await expect(statusCount).toBeVisible();
  72 |   });
  73 | });
  74 | 
```