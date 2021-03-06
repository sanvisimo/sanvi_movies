import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import Home from "./home";
import { shallow } from "enzyme";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("works", () => {
  act(() => {
    render(<Home />, container);
  });

  expect(container.querySelector("h2")).toEqual("TOP 10 Metracritic");
});

// it("Renders without crashing", () => {
//   cy.get("#home").should("have.length", 1);
// });
//
// it("Sections", () => {
//   cy.get(".home__section").should("have.length", 2);
// });
// it("Top shows", () => {
//   cy.get("#top-shows").should("have.length", 1);
// });
// it("Top movies", () => {
//   cy.get("#top-movies").should("have.length", 1);
// });
