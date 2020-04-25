describe("<App/>", () => {
  before(() => {
    cy.visit("/");
  });
  it("Renders without crashing", () => {
    cy.get("div").should("have.class", "App");
  });

  it("Default render", () => {
    cy.get("#main").should("have.length", 1);
  });

  it("default component", () => {
    cy.get("#home").should("have.length", 1);
  });
});
