import Movie from "./";
import { render, screen } from "@testing-library/react";

test("Renders the movie title", () => {
  render(<Movie name="Manhattan" />);
  const element = screen.getByRole("heading", {
    name: "Manhattan",
  });
  expect(element).toBeInTheDocument();
});
