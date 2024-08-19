
describe('Gallery Page', () => {
   beforeEach(() => {
      // Visit the gallery page before each test
      cy.visit('/gallery');
   });

   it('should load the gallery page', () => {
      // Ensure the page title and subtitle are visible
      cy.contains('Our Gallery').should('be.visible');
      cy.contains('See Our Work').should('be.visible');
   });

   it('should display all images by default', () => {
      // Ensure all images are visible on page load
      cy.get('img').should('have.length', 9); // Assuming there are 9 images in total
   });

   it('should filter images by type', () => {
      // Click on the 'Food' filter button
      cy.contains('button', 'Food').click();

      // Ensure only food images are displayed
      cy.get('img').should('have.length', 5); // Assuming 5 food images

      // Click on the 'Drink' filter button
      cy.contains('button', 'Drink').click();

      // Ensure only drink images are displayed
      cy.get('img').should('have.length', 4); // Assuming 4 drink images

      // Click on the 'All' button to reset the filters
      cy.contains('button', 'All').click();

      // Ensure all images are visible again
      cy.get('img').should('have.length', 9);
   });

   it('should apply active filter button styles', () => {
      // Click on the 'Food' filter button
      cy.contains('button', 'Food').click();

      // Ensure the 'Food' button has the active class/style
      cy.contains('button', 'Food').should('have.class', 'bg-indigo-300');

      // Ensure the 'Drink' button does not have the active class/style
      cy.contains('button', 'Drink').should('not.have.class', 'bg-indigo-300');

      // Click on the 'Drink' filter button
      cy.contains('button', 'Drink').click();

      // Ensure the 'Drink' button has the active class/style
      cy.contains('button', 'Drink').should('have.class', 'bg-indigo-300');

      // Ensure the 'Food' button does not have the active class/style
      cy.contains('button', 'Food').should('not.have.class', 'bg-indigo-300');
   });

   it('should apply fade-in animation to images', () => {
      // Assuming the fade-in animation adds a class like 'fade-in'
      cy.get('img').each(($el) => {
         cy.wrap($el).should('have.class', 'fade-in');
      });
   });
});
