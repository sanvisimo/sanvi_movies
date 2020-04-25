import Carousel from "../../src/components/Carousel";
import React from "react";

describe("Carousel component", () => {
  it("works", () => {
    // mount the component under test
    cy.mount(
      <Carousel>
        <div>Ciao</div>
      </Carousel>
    );
    // start testing!
    cy.contains("Ciao");
    // mounted component can be selected via its name, function, or JSX
    // e.g. '@HelloState', HelloState, or <HelloState />
  });

  it("arrows", () => {
    // mount the component under test
    cy.mount(
      <Carousel arrows>
        <div>Ciao</div>
      </Carousel>
    );
    // start testing!
    cy.contains('data-glide-el="controls"');
    // mounted component can be selected via its name, function, or JSX
    // e.g. '@HelloState', HelloState, or <HelloState />
  });
});
