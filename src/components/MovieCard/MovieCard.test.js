import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import MovieCard from "./MovieCard";

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
    render(<MovieCard />, container);
  });
  const title = document.querySelector("h2");
  expect(title.innerHTML).toBe("C'era una volta ad Hollywood...");
});

it("title props", () => {
  act(() => {
    render(<MovieCard title="Aquile Randagie" />, container);
  });
  const title = document.querySelector("h2");
  expect(title.innerHTML).toBe("Aquile Randagie");
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
