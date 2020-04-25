import React from "react";
import { render } from "@testing-library/react";
import Carousel from "./Carousel";

it("renders welcome message", () => {
  const { getByText } = render(
    <Carousel>
      <div>ciao</div>
      <div>Echo</div>
    </Carousel>
  );
  expect(getByText("ciao")).toBeInTheDocument();
});
