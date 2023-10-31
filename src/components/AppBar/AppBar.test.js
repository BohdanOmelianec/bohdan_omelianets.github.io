import { render, screen } from "@testing-library/react";
import AppBar from "./index";

test("First test", () => {
  render(<AppBar/>);

  const element = screen.getByText(/hello/);

  expect(element[0]).toBeTruthy();
})