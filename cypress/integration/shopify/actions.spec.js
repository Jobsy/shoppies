/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("click on a DOM element", () => {
    cy.get(".submit-btn").click();

    // You can click on 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // clicking in the center of the element is the default
    cy.get(".submit-btn").click();

    cy.get(".submit-btn").click("topLeft");
    cy.get(".submit-btn").click("top");
    cy.get(".submit-btn").click("topRight");
    cy.get(".submit-btn").click("left");
    cy.get(".submit-btn").click("right");
    cy.get(".submit-btn").click("bottomLeft");
    cy.get(".submit-btn").click("bottom");
    cy.get(".submit-btn").click("bottomRight");
  });

  it("focus on a DOM element", () => {
    cy.get("#title").focus();
  });

  it("type into a DOM element", () => {
    cy.get("#title").type("Matrix").should("have.value", "Matrix");

    cy.get(".submit-btn").click();
  });

  it("if empty string", () => {
    cy.get("#title").should("have.value", "");

    cy.get(".submit-btn")
      .click()
      .get(".errorPara")
      .should("contain", "Movie title is required");
  });
});
