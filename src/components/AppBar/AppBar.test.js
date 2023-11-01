import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import AppBar from "./index";


describe("App Bar Component", () => {
  test("Logo is rendered", () => {
    render(<AppBar/>);
    expect(screen.getByText(/Bohdan Omelianets/)).toBeInTheDocument();
  });

  test("Nav links are rendered", () => {
    render(<AppBar/>);
    const links = screen.getAllByRole(/navigation-link/);
    expect(links[0]).toHaveTextContent(/about me/i);
    expect(links[1]).toHaveTextContent(/experience/i);
    expect(links[2]).toHaveTextContent(/contacts/i);
  });

  test("First nav link has an active class", () => {
    render(<AppBar activeTab={0}/>);
    const links = screen.getAllByRole(/navigation-link/);
    expect(links[0]).toHaveClass("active");
    expect(links[1]).not.toHaveClass("active");
  });

  test("Each link has an list_animation class", () => {
    render(<AppBar activeTab={0}/>);
    const links = screen.getAllByRole(/navigation-link/);
    expect(links[0]).toHaveClass("list_animation");
    expect(links[1]).toHaveClass("list_animation");
    expect(links[2]).toHaveClass("list_animation");
  });
  
  test("Click on link should call a function", () => {
    const setActiveTab = jest.fn();
    render(<AppBar activeTab={0} setActiveTab={setActiveTab}/>);
    const link = screen.getByText(/experience/i);
    expect(link).not.toHaveClass("active");
    userEvent.click(link);
    expect(setActiveTab).toBeCalledTimes(1);
  });

})