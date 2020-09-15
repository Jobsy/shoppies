/// <reference types="cypress" />

context("Network Requests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // Manage AJAX / XHR requests in your app

  it("behavior of network requests and responses", () => {
    cy.server().should((server) => {
      // the default options on server
      // you can override any of these options
      expect(server.delay).to.eq(0);
      expect(server.method).to.eq("GET");
      expect(server.status).to.eq(200);
      expect(server.headers).to.be.null;
      expect(server.response).to.be.null;
      expect(server.onRequest).to.be.undefined;
      expect(server.onResponse).to.be.undefined;
      expect(server.onAbort).to.be.undefined;

      // These options control the server behavior
      // affecting all requests

      // pass false to disable existing route stubs
      expect(server.enable).to.be.true;
      // forces requests that don't match your routes to 404
      expect(server.force404).to.be.false;
      // whitelists requests from ever being logged or stubbed
      // expect(server.whitelist).to.be.a("function");
    });

    cy.server({
      method: "POST",
      delay: 1000,
      status: 422,
      response: {},
    });

    // any route commands will now inherit the above options
    // from the server. anything we pass specifically
    // to route will override the defaults though.
  });

  it("make an XHR request", () => {
    // https://on.cypress.io/request
    cy.request(
      `https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=fc9f9afc89ac3adf6ea79c6cecd34476&units=metric`
    ).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq("OK");
      // the server sometimes gets an extra comment posted from another machine
      // which gets returned as 1 extra object
      console.log(">>>>: ", response, response.body);
      expect(response.body)
        .to.have.property("coord")
        .to.contain({ lon: 3.75, lat: 6.58 });
      expect(response.body).to.have.property("base").to.equal("stations");
      expect(response.body).to.have.property("name").to.equals("Lagos");
      expect(response.headers)
        .to.have.property("access-control-allow-credentials")
        .to.equal("true");
      expect(response.headers)
        .to.have.property("content-type")
        .to.equal("application/json; charset=utf-8");
      expect(response.headers)
        .to.have.property("connection")
        .to.equal("keep-alive");
      expect(response.headers).to.have.property("server").to.equal("openresty");
      expect(response.headers)
        .to.have.property("x-cache-key")
        .to.equal("/data/2.5/weather?q=lagos&units=metric");
      expect(response).to.have.property("isOkStatusCode").to.equal(true);
      expect(response).to.have.property("duration");
    });
  });
});
