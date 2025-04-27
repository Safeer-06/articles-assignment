describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/"); 
  });

  it("successfully redirects to an article and compares the title", () => {
    cy.visit("/");
    cy.get('[data-testid="article-item"]')
      .first()
      .find('[data-testid="article-card-title"]')
      .should('exist')
      .invoke('text')
      .as('articleTitle');

    cy.get('[data-testid="article-item"]').first().click();

    cy.get('[data-testid="article-title"]', { timeout: 10000 }).should('be.visible');

    cy.get('@articleTitle').then((storedTitle) => {
      cy.get('[data-testid="article-title"]').should('have.text', storedTitle);
    });
  });

  it("more than five articles are being shown", () => {
    cy.visit("/");
    cy.get('[data-testid="article-item"]').should('have.length.greaterThan', 5);
  });
});
