import { test, expect } from '@playwright/test';

const POPUP_DISPLAY_LIMIT = 3;

test('3回表示した後は、ポップアップが表示されない', async ({ page }) => {
  await page.goto('http://localhost:8000');

  for (let i = 0; i < POPUP_DISPLAY_LIMIT; i++) {
    const popupWrapper = await page.locator('#popupWrapper');
    await expect(popupWrapper).toBeVisible();

    // ブラウザをリロード
    await page.reload();
  }

  const invisiblePopupWrapper = await page.locator('#popupWrapper');
  await expect(invisiblePopupWrapper).not.toBeVisible();
});
