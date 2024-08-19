import { expect } from "@playwright/test";

export class ContactPage {
   constructor(page) {
      this.page = page;
      this.heroHeading = page.locator('text=Contact Us').nth(0);
      this.cardHeading = page.locator('text=Contact Us').nth(1);
      this.heroSubHeading = page.locator('text=Get in Touch');
      this.phoneNumber = page.locator('text=123-456-7890'); // Fixed typo
      this.email = page.locator('text=654 Sycamore Avenue, Meadowville, WA 76543'); // Fixed typo
      this.formHeading = page.locator('text=Send Us A Message');
      this.nameField = page.locator('input[name="name"]'); // Fixed typo
   }

   async goto() {
      await this.page.goto('http://localhost:5173/contact');
   }

   async isOnPage() {
      await this.heroHeading.waitFor({ timeout: 3000 });
      await this.heroSubHeading.waitFor();
   }

   async isHeroHeadingVisible() {
      await expect(this.heroHeading).toBeVisible();
   }

   async isCardHeadingVisible() {
      await expect(this.cardHeading).toBeVisible();
   }

   async isHeroSubHeadingVisible() {
      await expect(this.heroSubHeading).toBeVisible();
   }

   async isPhoneNumberVisible() {
      await expect(this.phoneNumber).toBeVisible();
   }

   async isEmailVisible() {
      await expect(this.email).toBeVisible();
   }

   async isFormHeadingVisible() {
      await expect(this.formHeading).toBeVisible();
   }

   async isNameFieldVisible() {
      await expect(this.nameField).toBeVisible();
   }
}
