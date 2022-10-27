import React from "react";
import BikeList from "../BikeList";
import { render } from "@testing-library/react";

test("First test", () => {
  const component = render(<BikeList />);
  const headerEl = component.getByTestId("header");
  expect(headerEl.textContent).toBe("Test");
});
