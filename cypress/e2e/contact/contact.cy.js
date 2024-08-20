describe('Contact Page', () => {
   beforeEach(() => {
      // Visit the contact page before each test
      cy.visit('/contact');
   });
   
   it('should display the hero section elements', () => {
      cy.contains('h1', 'Contact Us').should('be.visible'); 
      cy.contains('Get in Touch').should('be.visible');

   });

   it('should display the contact information card', () => {
      cy.contains('h2', 'Contact us').should('be.visible');
      cy.contains('123-456-7890').should('be.visible');
      cy.contains('example1234@gmail.com').should('be.visible');
      cy.contains('654 Sycamore Avenue, Meadowville, WA 76543').should('be.visible');
   });

   it('should display the contact form', () => {
      cy.get('input[name="name"]').should('be.visible');
      cy.get('input[name="email"]').should('be.visible');
      cy.get('input[name="message"]').should('be.visible');
      cy.get('button[type="submit"]').should('be.visible');
   });

   it('form fields should be empty by default', () => {
      cy.get('input[name="name"]').should('have.value', '');
      cy.get('input[name="email"]').should('have.value', '');
      cy.get('input[name="phone"]').should('have.value', '');
      cy.get('input[name="message"]').should('have.value', '');
   });

   it('should display an error message when submitting an empty form', () => {
      cy.get('button[type="submit"]').click();
      cy.contains('Name is required').should('have.length', 1);
      cy.contains('Valid email is required').should('have.length', 1);
      cy.contains('Valid 10-digit phone number is required').should('have.length', 1);
      cy.contains('Message is required').should('have.length', 1);
   });

   it('should display a success message after submitting the form', () => {
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('johndoe@example.com');
      cy.get('input[name="phone"]').type('1234567890');
      cy.get('input[name="message"]').type('This is a test message');
      cy.get('button[type="submit"]').click();
      cy.contains('Email sent successfully!').should('be.visible');
   });

});
