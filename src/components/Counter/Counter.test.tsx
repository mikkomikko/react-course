import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  test("should render the count", () => {
    render(<Counter count={1} />);

    const counter = screen.getByTestId("counter");

    expect(counter).toHaveTextContent("1");
  });

  test("it should have a level 2 heading", () => {
    render(<Counter count={1} />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  test("the button increases the internalCount by one", () => {
    render(<Counter count={1} />);
    const initialCount = screen.getByTestId("internalCount");
    expect(initialCount).toHaveTextContent("0");

    const button = screen.getByRole("button", { name: "Increase" });
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    const newCount = screen.getByTestId("internalCount");
    expect(newCount).toHaveTextContent("3");
  });
});
