/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 3", () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://www.99.co/')
  });

  it("Check filter buy is work expected", () => {

    cy.contains('label', 'Buy').click()

    const expectedFilters = [
      'Price range',
      'Property type',
      'Bedrooms',
    ]
    
    cy.get('span').each(($title, index) => {
      const actualFilter = $title.text().trim()
      expect(actualFilter).to.equal(expectedFilters[index])
    })

    // filter price
    cy.contains('span', 'Price range').click()
    cy.get('input[name="price_min"]').type('100000')
    cy.get('input[name="price_max"]').type('100000')
    
    cy.contains('span', 'Search').click()
    
    cy.get('[itemprop="price"]').each(($el) => {
      const price = parseFloat($el.text().replace('$', '').replace(',', ''))
      expect(price).to.be.at.most(100000)
    })

  });


  it("Check filter rent is work expected", () => {
    cy.contains('label', 'Rent').click()

    const expectedFilters = [
      'Price range',
      'Property type',
      'Bedrooms',
      'Rental type'
    ]
    
    cy.get('span').each(($title, index) => {
      const actualFilter = $title.text().trim()
      expect(actualFilter).to.equal(expectedFilters[index])
    })

    // filter property type
    cy.contains('span', 'Property type').click()
    cy.contains('span', 'Condo').click()
    cy.contains('span', 'Search').click()
    cy.contains('Condo').should('exist')
  });

});
