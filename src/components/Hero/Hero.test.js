import { render, screen } from "@testing-library/react";
import Hero from ".";
import '@testing-library/jest-dom'

describe("Rendering Hero section", () => {
  test("Main title is rendered", async () => {
    render(<Hero/>);
  
    const element = screen.getByText(/Hi, I am Bohdan,/i);
    expect(element).toBeInTheDocument();
  })

  test("Check hidden heading", () => {
    render(<Hero/>);
  
    const element = screen.getByText(/developer/i);
    expect(element).toBeInTheDocument();
    expect(element).not.toBeVisible();
  })

  test("Render download button", () => {
    render(<Hero/>);
  
    const element = screen.getByRole('button', { name: /download cv/i});
    expect(element).toBeInTheDocument();
    // expect(element).toBeVisible();
  })

})