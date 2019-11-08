/// <reference types="Cypress" />

describe("Home Page", () => {
  describe("Accessibility checks", () => {
    beforeEach(() => {
      cy.visit("/")
      cy.injectAxe()
      cy.wait(500)
    })
    it("Has no detectable accessibility violations on load", () => {
      cy.checkA11y()
    })
  })
  describe("Home Page Functionality", () => {
    beforeEach(() => {
      cy.visit("/")
    })
    // it("Renders the page correctly", () => {
    // })
  })
})
