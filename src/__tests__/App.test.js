import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import Results from "../components/results/results";

test("renders learn react link", () => {
  render(<App />);
  // screen.debug();
  const linkElement = screen.getByText(/RESTy/i);
  expect(linkElement).toBeInTheDocument();
});

test("should render the count", () => {
  const count = 10;

  render(<Results count={count} />);
  const item = screen.getAllByTitle("count");
  expect(item).toHaveTextContent("10");
});

test("work as expected", () => {
  render(<App />);
  // screen.debug();
  const button = screen.getByTestId('data-testid="test"');
  fireEvent.click(button);
  expect(screen.getByTestId("test")).toHaveTextContent("1");
});
