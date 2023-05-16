describe('Navigation', () => {
    it('should to add new projects', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/');

        // Find a link with an href attribute containing "about" and click it
        cy.get('a[href*="projects"]').click();

      cy.visit('http://localhost:3000/admin');

        // The new page should contain an h1 with "About page"
        cy.get('button').contains('Add new project').click();

      
    });
  });