/// <reference types="cypress" />
import Top from "../../src/components/Home/Top";
import React from "react";
import { mount } from "cypress-react-unit-test";

describe("Carousel component", () => {
  it("works", () => {
    // mount the component under test
    mount(<Top title="titolo" elements={[]} />);
    // start testing!
    cy.contains("titolo");
    // mounted component can be selected via its name, function, or JSX
    // e.g. '@HelloState', HelloState, or <HelloState />
  });
});
