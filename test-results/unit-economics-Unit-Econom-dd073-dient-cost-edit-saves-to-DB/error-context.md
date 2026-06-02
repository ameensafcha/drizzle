# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: unit-economics.spec.ts >> Unit Economics >> ingredient cost edit saves to DB
- Location: tests\unit-economics.spec.ts:42:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 5.5
Received: 0
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
        - generic [ref=e32]: 35 SAR
        - generic [ref=e33]: per bottle · 240ml
      - generic [ref=e34]:
        - generic [ref=e35]: Cost Per Bottle
        - generic [ref=e37]: 5.50 SAR
        - generic [ref=e38]: all-in COGS
      - generic [ref=e39]:
        - generic [ref=e40]: Gross Margin
        - generic [ref=e42]: 84.3%
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
      - button "§ 02 Unit Economics Ingredients, packaging, pricing, break-even. 84.3% gross margin break-even · 0 bot/mo →" [ref=e62] [cursor=pointer]:
        - generic [ref=e63]: § 02
        - generic [ref=e64]: Unit Economics
        - generic [ref=e65]: Ingredients, packaging, pricing, break-even.
        - generic [ref=e66]:
          - generic [ref=e67]: 84.3%
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
        - generic [ref=e131]: "02"
        - generic [ref=e132]: Unit Economics
        - generic [ref=e133]: plug in · watch margins move
        - button "Close" [ref=e134] [cursor=pointer]: ✕
      - generic [ref=e135]:
        - generic [ref=e136]:
          - generic [ref=e137]:
            - img
            - generic [ref=e138]:
              - generic [ref=e139]: Ingredients
              - generic [ref=e140]: per bottle
            - table [ref=e141]:
              - rowgroup [ref=e142]:
                - row "Honey (300g) ~80% of ingredient cost 5.5 SAR" [ref=e143]:
                  - cell "Honey (300g)" [ref=e144]
                  - cell "~80% of ingredient cost" [ref=e145]
                  - cell "5.5 SAR" [ref=e146]:
                    - generic [ref=e147]:
                      - spinbutton [ref=e148]: "5.5"
                      - generic: SAR
                - row "Habanero peppers (10) primary heat 0 SAR" [ref=e149]:
                  - cell "Habanero peppers (10)" [ref=e150]
                  - cell "primary heat" [ref=e151]
                  - cell "0 SAR" [ref=e152]:
                    - generic [ref=e153]:
                      - spinbutton [ref=e154]: "0"
                      - generic: SAR
                - row "Jalapeño peppers (2) secondary heat 0 SAR" [ref=e155]:
                  - cell "Jalapeño peppers (2)" [ref=e156]
                  - cell "secondary heat" [ref=e157]
                  - cell "0 SAR" [ref=e158]:
                    - generic [ref=e159]:
                      - spinbutton [ref=e160]: "0"
                      - generic: SAR
                - row "Red onion (½ medium) savory depth 0 SAR" [ref=e161]:
                  - cell "Red onion (½ medium)" [ref=e162]
                  - cell "savory depth" [ref=e163]
                  - cell "0 SAR" [ref=e164]:
                    - generic [ref=e165]:
                      - spinbutton [ref=e166]: "0"
                      - generic: SAR
                - row "Garlic (2 cloves) 0 SAR" [ref=e167]:
                  - cell "Garlic (2 cloves)" [ref=e168]
                  - cell [ref=e169]
                  - cell "0 SAR" [ref=e170]:
                    - generic [ref=e171]:
                      - spinbutton [ref=e172]: "0"
                      - generic: SAR
                - row "Dried oregano / zaatar 1 tsp 0 SAR" [ref=e173]:
                  - cell "Dried oregano / zaatar" [ref=e174]
                  - cell "1 tsp" [ref=e175]
                  - cell "0 SAR" [ref=e176]:
                    - generic [ref=e177]:
                      - spinbutton [ref=e178]: "0"
                      - generic: SAR
                - row "Apple cider vinegar 1 tsp 0 SAR" [ref=e179]:
                  - cell "Apple cider vinegar" [ref=e180]
                  - cell "1 tsp" [ref=e181]
                  - cell "0 SAR" [ref=e182]:
                    - generic [ref=e183]:
                      - spinbutton [ref=e184]: "0"
                      - generic: SAR
                - row "SUBTOTAL 5.50 SAR" [ref=e185]:
                  - cell "SUBTOTAL" [ref=e186]
                  - cell "5.50 SAR" [ref=e187]
          - generic [ref=e188]:
            - img
            - generic [ref=e189]:
              - generic [ref=e190]: Packaging
              - generic [ref=e191]: per bottle
            - table [ref=e192]:
              - rowgroup [ref=e193]:
                - row "Glass bottle (240ml) moq ~1000 pcs 0 SAR" [ref=e194]:
                  - cell "Glass bottle (240ml)" [ref=e195]
                  - cell "moq ~1000 pcs" [ref=e196]
                  - cell "0 SAR" [ref=e197]:
                    - generic [ref=e198]:
                      - spinbutton [ref=e199]: "0"
                      - generic: SAR
                - row "Cap / lid 0 SAR" [ref=e200]:
                  - cell "Cap / lid" [ref=e201]
                  - cell [ref=e202]
                  - cell "0 SAR" [ref=e203]:
                    - generic [ref=e204]:
                      - spinbutton [ref=e205]: "0"
                      - generic: SAR
                - row "Label (waterproof) custom rubberhose art 0 SAR" [ref=e206]:
                  - cell "Label (waterproof)" [ref=e207]
                  - cell "custom rubberhose art" [ref=e208]
                  - cell "0 SAR" [ref=e209]:
                    - generic [ref=e210]:
                      - spinbutton [ref=e211]: "0"
                      - generic: SAR
                - row "Outer box / sleeve branded unboxing 0 SAR" [ref=e212]:
                  - cell "Outer box / sleeve" [ref=e213]
                  - cell "branded unboxing" [ref=e214]
                  - cell "0 SAR" [ref=e215]:
                    - generic [ref=e216]:
                      - spinbutton [ref=e217]: "0"
                      - generic: SAR
                - row "Brochure insert sauce teasers 0 SAR" [ref=e218]:
                  - cell "Brochure insert" [ref=e219]
                  - cell "sauce teasers" [ref=e220]
                  - cell "0 SAR" [ref=e221]:
                    - generic [ref=e222]:
                      - spinbutton [ref=e223]: "0"
                      - generic: SAR
                - row "Seal / tamper band food safety 0 SAR" [ref=e224]:
                  - cell "Seal / tamper band" [ref=e225]
                  - cell "food safety" [ref=e226]
                  - cell "0 SAR" [ref=e227]:
                    - generic [ref=e228]:
                      - spinbutton [ref=e229]: "0"
                      - generic: SAR
                - row "SUBTOTAL 0.00 SAR" [ref=e230]:
                  - cell "SUBTOTAL" [ref=e231]
                  - cell "0.00 SAR" [ref=e232]
        - generic [ref=e233]:
          - generic [ref=e234]:
            - generic [ref=e235]:
              - generic [ref=e236]: Other Variable Costs
              - generic [ref=e237]: per bottle
            - table [ref=e238]:
              - rowgroup [ref=e239]:
                - row "Labor per bottle production time 0 SAR" [ref=e240]:
                  - cell "Labor per bottle" [ref=e241]
                  - cell "production time" [ref=e242]
                  - cell "0 SAR" [ref=e243]:
                    - generic [ref=e244]:
                      - spinbutton [ref=e245]: "0"
                      - generic: SAR
                - row "Shipping to customer smsa / aramex 0 SAR" [ref=e246]:
                  - cell "Shipping to customer" [ref=e247]
                  - cell "smsa / aramex" [ref=e248]
                  - cell "0 SAR" [ref=e249]:
                    - generic [ref=e250]:
                      - spinbutton [ref=e251]: "0"
                      - generic: SAR
                - row "Payment processing 0.00 SAR @ retail 0 %" [ref=e252]:
                  - cell "Payment processing" [ref=e253]
                  - cell "0.00 SAR @ retail" [ref=e254]
                  - cell "0 %" [ref=e255]:
                    - generic [ref=e256]:
                      - spinbutton [ref=e257]: "0"
                      - generic: "%"
          - generic [ref=e258]:
            - img
            - generic [ref=e259]:
              - generic [ref=e260]: Pricing & Margin
              - generic [ref=e261]: ● HEALTHY
            - generic [ref=e262]:
              - generic [ref=e263]: Retail Price ✏ the big lever
              - generic [ref=e264]:
                - generic [ref=e266]:
                  - spinbutton [ref=e267]: "35"
                  - generic: SAR
                - generic [ref=e268]: 35SAR
            - generic [ref=e269]:
              - generic [ref=e270]: Retail price
              - generic [ref=e271]: + 35.00
              - generic [ref=e272]: Total COGSing+pkg+labor
              - generic [ref=e273]: − 5.50
              - generic [ref=e274]:
                - text: Processing fee
                - generic [ref=e275]: 0%
              - generic [ref=e276]: − 0.00
              - generic [ref=e278]: Gross profit
              - generic [ref=e279]: "29.50"
            - generic [ref=e280]:
              - generic [ref=e281]:
                - generic [ref=e282]: Gross Margin
                - generic [ref=e283]: 84.3%
              - generic [ref=e288]:
                - generic [ref=e289]: ● <25% danger
                - generic [ref=e290]: ● 25–40% watch
                - generic [ref=e291]: ● 40%+ healthy
            - generic [ref=e294] [cursor=pointer]:
              - generic [ref=e295]: Absorb Shipping (0.00 SAR)
              - generic [ref=e296]: Customer pays shipping separately.
        - generic [ref=e297]:
          - generic [ref=e298]:
            - generic [ref=e300]: Break-Even
            - generic [ref=e301]:
              - generic [ref=e302]:
                - generic [ref=e303]: Monthly Fixed Costs
                - button "▾ breakdown" [ref=e304] [cursor=pointer]
              - generic [ref=e305]:
                - spinbutton [ref=e306]: "0"
                - generic: SAR
            - generic [ref=e307]:
              - generic [ref=e308]: Contribution / bottle
              - generic [ref=e309]: 29.50 SAR
            - generic [ref=e310]:
              - generic [ref=e311]: Break-Even
              - generic [ref=e312]:
                - generic [ref=e313]: "0"
                - generic [ref=e314]: bottles / month
              - generic [ref=e315]: ≈ 0 SAR revenue/mo
              - generic [ref=e316]: ⌈ 0 ÷ 29.50 ⌉ — the floor we must clear each month.
          - generic [ref=e317]:
            - generic [ref=e318]:
              - generic [ref=e319]: Monthly Projection
              - generic [ref=e320]: 0 bottles / mo
            - generic [ref=e321]:
              - generic [ref=e322]:
                - generic [ref=e323]: Volume Slider
                - generic [ref=e324]: 0BOT/MO
              - slider [ref=e325]: "10"
              - generic [ref=e326]:
                - generic [ref=e327]: "10"
                - generic [ref=e328]: •
                - generic [ref=e329]: "500"
            - generic [ref=e330]:
              - generic [ref=e331]:
                - generic [ref=e332]: Revenue
                - generic [ref=e333]: 0SAR
              - generic [ref=e334]:
                - generic [ref=e335]: COGS
                - generic [ref=e336]: 0SAR
              - generic [ref=e337]:
                - generic [ref=e338]: Gross Profit
                - generic [ref=e339]: 0SAR
              - generic [ref=e340]:
                - generic [ref=e341]: Net Profit
                - generic [ref=e342]: 0SAR
            - generic [ref=e343]:
              - generic [ref=e344]: Cash Waterfall
              - generic [ref=e345]:
                - generic [ref=e346]:
                  - generic [ref=e347]: Revenue
                  - generic [ref=e349]: "0"
                - generic [ref=e350]:
                  - generic [ref=e351]: COGS
                  - generic [ref=e353]: "0"
                - generic [ref=e354]:
                  - generic [ref=e355]: Processing
                  - generic [ref=e357]: "0"
                - generic [ref=e358]:
                  - generic [ref=e359]: Fixed costs
                  - generic [ref=e361]: "0"
                - generic [ref=e362]:
                  - generic [ref=e363]: Net profit
                  - generic [ref=e365]: "0"
            - generic [ref=e366]:
              - generic [ref=e367]:
                - generic [ref=e368]: Annual Projection (×12)
                - generic [ref=e369]: 0SAR
              - generic [ref=e370]:
                - text: 📈 profitable at this volume
                - text: "@ 0 bot/mo · 35 SAR retail"
    - generic [ref=e371]:
      - generic [ref=e372]: Drizzle & Sauce · founder's cockpit · 2026
      - generic [ref=e373]: ● neon connected
  - generic: ✦ saved
  - button "Open Next.js Dev Tools" [ref=e379] [cursor=pointer]:
    - img [ref=e380]
  - alert [ref=e383]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { getStore } from './db-utils';
  3   | 
  4   | test.describe('Unit Economics', () => {
  5   | 
  6   |   test.beforeEach(async ({ page }) => {
  7   |     await page.goto('/');
  8   |     await page.waitForLoadState('networkidle');
  9   |     await expect(page.locator('.section-tile').filter({ hasText: 'Unit Economics' }).first()).toBeVisible();
  10  |   });
  11  | 
  12  |   test('retail price edit saves to DB', async ({ page }) => {
  13  |     await page.locator('.section-tile').filter({ hasText: 'Unit Economics' }).click();
  14  |     await expect(page.locator('.modal')).toBeVisible();
  15  |     await page.waitForTimeout(300);
  16  | 
  17  |     const input = page.locator('.modal .card').filter({ hasText: 'Pricing & Margin' }).locator('.num-input input');
  18  |     await input.click();
  19  |     await input.fill('35');
  20  |     await input.press('Enter');
  21  |     await page.waitForTimeout(3000);
  22  | 
  23  |     const db = await getStore('retailPrice');
  24  |     expect(db).toBe(35);
  25  | 
  26  |     await page.keyboard.press('Escape');
  27  |     await page.reload();
  28  |     await page.waitForLoadState('networkidle');
  29  |     await page.waitForTimeout(3000);
  30  | 
  31  |     await page.locator('.section-tile').filter({ hasText: 'Unit Economics' }).click();
  32  |     await expect(page.locator('.modal')).toBeVisible();
  33  |     const restored = page.locator('.modal .card').filter({ hasText: 'Pricing & Margin' }).locator('.num-input input');
  34  |     expect(await restored.inputValue()).toBe('35');
  35  | 
  36  |     await restored.click();
  37  |     await restored.fill('0');
  38  |     await restored.press('Enter');
  39  |     await page.waitForTimeout(3000);
  40  |   });
  41  | 
  42  |   test('ingredient cost edit saves to DB', async ({ page }) => {
  43  |     await page.locator('.section-tile').filter({ hasText: 'Unit Economics' }).click();
  44  |     await expect(page.locator('.modal')).toBeVisible();
  45  |     await page.waitForTimeout(300);
  46  | 
  47  |     const ingCard = page.locator('.modal .card').filter({ hasText: 'Ingredients' });
  48  |     const firstRow = ingCard.locator('.cost-table tbody tr').first();
  49  |     const input = firstRow.locator('.num-input input');
  50  |     await input.click();
  51  |     await page.waitForTimeout(100);
  52  |     await input.click({ clickCount: 3 });
  53  |     await input.press('Backspace');
  54  |     await input.pressSequentially('5.50', { delay: 50 });
  55  |     await input.press('Enter');
  56  |     await page.waitForTimeout(3000);
  57  | 
  58  |     const db = await getStore('ingredients');
  59  |     expect(Array.isArray(db)).toBe(true);
> 60  |     expect(db[0].val).toBe(5.5);
      |                       ^ Error: expect(received).toBe(expected) // Object.is equality
  61  | 
  62  |     await input.click({ clickCount: 3 });
  63  |     await input.press('Backspace');
  64  |     await input.pressSequentially('0', { delay: 50 });
  65  |     await input.press('Enter');
  66  |     await page.waitForTimeout(3000);
  67  |   });
  68  | 
  69  |   test('volume slider changes value in DB', async ({ page }) => {
  70  |     await page.locator('.section-tile').filter({ hasText: 'Unit Economics' }).click();
  71  |     await expect(page.locator('.modal')).toBeVisible();
  72  |     await page.waitForTimeout(300);
  73  | 
  74  |     const slider = page.locator('.modal input[type="range"]');
  75  |     await slider.evaluate((el: HTMLInputElement) => {
  76  |       const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')!.set!;
  77  |       nativeInputValueSetter.call(el, '300');
  78  |       el.dispatchEvent(new Event('input', { bubbles: true }));
  79  |       el.dispatchEvent(new Event('change', { bubbles: true }));
  80  |     });
  81  |     await page.waitForTimeout(3000);
  82  | 
  83  |     const db = await getStore('unitsPerMonth');
  84  |     expect(db).toBe(300);
  85  | 
  86  |     await slider.evaluate((el: HTMLInputElement) => {
  87  |       const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')!.set!;
  88  |       nativeInputValueSetter.call(el, '10');
  89  |       el.dispatchEvent(new Event('input', { bubbles: true }));
  90  |       el.dispatchEvent(new Event('change', { bubbles: true }));
  91  |     });
  92  |     await page.waitForTimeout(3000);
  93  |   });
  94  | 
  95  |   test('fixed costs edit saves to DB', async ({ page }) => {
  96  |     await page.locator('.section-tile').filter({ hasText: 'Unit Economics' }).click();
  97  |     await expect(page.locator('.modal')).toBeVisible();
  98  |     await page.waitForTimeout(300);
  99  | 
  100 |     // Find the fixed costs input by closest context
  101 |     // The Break-Even card has Monthly Fixed Costs label followed by num-input
  102 |     const modal = page.locator('.modal');
  103 |     const fcInput = modal.locator('.card').filter({ hasText: 'Break-Even' }).locator('.num-input input').first();
  104 |     await fcInput.click();
  105 |     await fcInput.fill('5000');
  106 |     await fcInput.press('Enter');
  107 |     await page.waitForTimeout(3000);
  108 | 
  109 |     const db = await getStore('fixedCosts');
  110 |     expect(db).toBe(5000);
  111 | 
  112 |     await fcInput.click();
  113 |     await fcInput.fill('0');
  114 |     await fcInput.press('Enter');
  115 |     await page.waitForTimeout(3000);
  116 |   });
  117 | 
  118 |   test('reset clears economics values in DB', async ({ page }) => {
  119 |     const pricingCard = page.locator('.section-tile').filter({ hasText: 'Unit Economics' });
  120 |     await pricingCard.click();
  121 |     await expect(page.locator('.modal')).toBeVisible();
  122 |     await page.waitForTimeout(300);
  123 | 
  124 |     const retailInput = page.locator('.modal .card').filter({ hasText: 'Pricing & Margin' }).locator('.num-input input');
  125 |     await retailInput.click();
  126 |     await retailInput.fill('99');
  127 |     await retailInput.press('Enter');
  128 |     await page.waitForTimeout(3000);
  129 | 
  130 |     let db = await getStore('retailPrice');
  131 |     expect(db).toBe(99);
  132 | 
  133 |     await page.keyboard.press('Escape');
  134 | 
  135 |     page.on('dialog', dialog => dialog.accept());
  136 |     await page.locator('button.btn.ghost').filter({ hasText: 'Reset Defaults' }).click();
  137 |     await page.waitForTimeout(3000);
  138 | 
  139 |     db = await getStore('retailPrice');
  140 |     expect(db).toBe(0);
  141 |   });
  142 | });
  143 | 
```