/// <reference types="cypress" />

import React from "react";
import Page from "../../src/components/Page";
import { mount } from "cypress-react-unit-test";

describe("Page component", () => {
  it("works", () => {
    // mount the component under test
    cy.mount(<Page />);
    // start testing!
    cy.contains("page");
    // mounted component can be selected via its name, function, or JSX
    // e.g. '@HelloState', HelloState, or <HelloState />
  });
});
