import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Top from "./Top";
// import MockedCarousel from "../Carousel";

jest.mock("../Carousel", () => {
  return function DummyCarousel(props) {
    return <div data-testid="carousel">{props.children.length}</div>;
  };
});

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

describe("Top component", () => {
  it("works", () => {
    act(() => {
      render(<Top />, container);
    });
    expect(
      container.querySelector('[data-testid="carousel"]').textContent
    ).toEqual("0");
  });

  it("Title", () => {
    act(() => {
      render(<Top title="titolo" />, container);
    });
    expect(container.querySelector("h2").textContent).toEqual(
      "TOP TITOLO LAST WEEK"
    );
  });

  it("Charge elements", () => {
    act(() => {
      render(<Top elements={[1, 2, 3]} />, container);
    });
    expect(
      container.querySelector('[data-testid="carousel"]').textContent
    ).toEqual("3");
  });
});
