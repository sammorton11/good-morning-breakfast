import { test } from '@playwright/test';
import { ContactPage } from './pages/contact';

test.describe('Contact Page', () => {
   let contactPage;

   test.beforeEach(async ({ page }) => {
      contactPage = new ContactPage(page);
      contactPage.goto();
   });

   test.afterEach(async ({ page }) => {
      await page.screenshot({ path: `contact-${Date.now()}.png` });
      page.close();
   });

   test('should display hero heading', async () => {
      await contactPage.isOnPage();
      await contactPage.isHeroHeadingVisible();
   });
});
