import { test, expect } from '@playwright/test';
import { getStore } from './db-utils';

test.describe('Social Media', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('.section-tile').filter({ hasText: 'Social Media' }).first()).toBeVisible();
  });

  test('follower count edit saves to DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Social Media' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(500);

    // Edit followers in first channel card
    const channelCards = page.locator('.modal .grid-4 .card');
    const firstCard = channelCards.first();
    const input = firstCard.locator('.num-input input');
    await input.click();
    await input.fill('5000');
    await input.press('Enter');
    await page.waitForTimeout(3000);

    const db: any = await getStore('social');
    expect(db.channels[0].followers).toBe(5000);

    await input.click();
    await input.fill('0');
    await input.press('Enter');
    await page.waitForTimeout(3000);
  });

  test('add and delete calendar entry persists to DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Social Media' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(500);

    const calendarCard = page.locator('.modal .card').filter({ hasText: 'Content Calendar' });
    const beforeLen = (await getStore('social')).calendar.length;

    await page.getByText('+ Add calendar entry').click();
    await page.waitForTimeout(2000);

    let db: any = await getStore('social');
    expect(db.calendar.length).toBe(beforeLen + 1);

    const deleteBtn = calendarCard.locator('button').filter({ hasText: '✕' }).last();
    await deleteBtn.click();
    await page.waitForTimeout(2000);

    db = await getStore('social');
    expect(db.calendar.length).toBe(beforeLen);
  });

  test('add influencer with edit and status cycle saves to DB', async ({ page }) => {
    await page.locator('.section-tile').filter({ hasText: 'Social Media' }).click();
    await expect(page.locator('.modal')).toBeVisible();
    await page.waitForTimeout(500);

    const pipelineCard = page.locator('.modal .card').filter({ hasText: 'Influencer Pipeline' });

    await page.getByText('+ Add influencer').click();
    await page.waitForTimeout(1000);

    const nameSpan = pipelineCard.locator('span').filter({ hasText: 'name' }).first();
    await nameSpan.click();
    await page.waitForTimeout(300);
    const nameInput = pipelineCard.locator('input[type="text"]').first();
    await nameInput.fill('@testinfluencer');
    await nameInput.press('Enter');
    await page.waitForTimeout(2000);

    const statusBtn = pipelineCard.locator('button').filter({ hasText: /Not Started|In Progress|Done/ }).last();
    const before = await statusBtn.textContent() || '';
    await statusBtn.click();
    await page.waitForTimeout(2000);

    const db: any = await getStore('social');
    const added = db.influencers[db.influencers.length - 1];
    expect(added.name).toBe('@testinfluencer');
    expect(added.status).not.toBe(before);

    const deleteBtn = pipelineCard.locator('button').filter({ hasText: '✕' }).last();
    await deleteBtn.click();
    await page.waitForTimeout(2000);
  });
});
