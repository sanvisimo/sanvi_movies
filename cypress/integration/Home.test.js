describe("<App/>", () => {
  before(() => {
    cy.visit("/");
  });

  it("Renders without crashing", () => {
    cy.get("#home").should("have.length", 1);
  });

  it("Sections", () => {
    cy.get(".home__section").should("have.length", 2);
  });
  it("Top shows", () => {
    cy.get("#top-shows").should("have.length", 1);
  });
  it("Top movies", () => {
    cy.get("#top-movies").should("have.length", 1);
  });
});
