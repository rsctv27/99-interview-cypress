/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 2", () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://www.99.co/')
  });

  it("Should be redirected to popular projects landing page after click link", () => {
     cy.get('a[href="/singapore/new-launches"]').click()
     cy.url().should('eq', 'https://www.99.co/singapore/new-launches')
  });
  
});
