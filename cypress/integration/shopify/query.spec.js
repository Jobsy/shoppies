/// <reference types="cypress" />

context("Querying", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("query DOM elements", () => {
    cy.get(".loader").should("contain", "Loading ...");

    cy.get("div").should("have.class", "content3");
    cy.get("Button").should("have.class", "submit-btn");
    cy.get("Button").should("not.have.attr", "disabled");

    //  get element's CSS property
    cy.get(".content3").invoke("css", "display").should("equal", "flex");
    cy.get("input").invoke("css", "border-radius").should("equal", "4px");
    // cy.get(".banner").invoke("css", "position").should("equal", "absolute");
  });

  it("query DOM elements within a specific element", () => {
    cy.get(".content3").within(() => {
      cy.get("input:first").should(
        "have.attr",
        "placeholder",
        "Search your top movies by title"
      );
      cy.get("input:first").should("have.attr", "type", "text");
    });
    cy.get(".content3").within(() => {
      cy.get("Button").should("have.attr", "type", "submit");
    });
  });

  it("query the root DOM element", () => {
    cy.root().should("match", "html");

    cy.get("#root").within(() => {
      cy.root().get("div").should("have.class", "content3");
    });
  });
});
