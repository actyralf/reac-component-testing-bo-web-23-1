import Movies from "./";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const testMovies = [
  {
    id: "28djdh72",
    name: "Manhattan",
    isLiked: false,
  },
  {
    id: "dknseu2",
    name: "Annie Hall",
    isLiked: false,
  },
  {
    id: "dkwi02ksk",
    name: "Terminator",
    isLiked: true,
  },
];

test("Renders all movie titles", () => {
  render(<Movies initialMovies={testMovies} />);
  testMovies.forEach((movie) => {
    const movieElement = screen.getByRole("heading", {
      name: movie.name,
    });
    expect(movieElement).toBeInTheDocument();
  });
});

test("Renders movie 'Pulp Fiction' if added by user", async () => {
  const user = userEvent.setup();
  render(<Movies initialMovies={testMovies} />);
  const inputElement = screen.getByLabelText("Name");
  await user.type(inputElement, "Pulp Fiction");
  const buttonElement = screen.getByRole("button", {
    name: "Add",
  });
  await user.click(buttonElement);
  const pulpFictionElement = screen.getByRole("heading", {
    name: /pulp fiction/i,
  });
  expect(pulpFictionElement).toBeInTheDocument();
});
