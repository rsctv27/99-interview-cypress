/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 1", () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://www.99.co/')
  });

  it("Should contain expected Div titles with correct text", () => {

    const expectedDivTitles = [
      'Featured Projects',
      'Popular Projects',
      'Find your property value instantly',
      'Listings with videos',
      'View these via video call',
      'Popular listings',
      'Featured stories',
      'Listings found only on 99',
      'Latest New Launches',
      'Explore 99.co'
    ]
    
    cy.get('div').each(($title, index) => {
      const actualDivTitle = $title.text().trim()
      expect(actualDivTitle).to.equal(expectedDivTitles[index])
    })
  });

});
