/// <reference types="cypress" />

context("Location", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("get the current URL", () => {
    cy.url().should("eq", "http://localhost:3000/");
  });
});
