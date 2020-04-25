import React from "react";
import { render } from "@testing-library/react";
import Page from "./Page";

describe("Page component", () => {
  it("works", () => {
    const { getByText } = render(<Page />);
    expect(getByText("Page")).toBeInTheDocument();
  });
});
