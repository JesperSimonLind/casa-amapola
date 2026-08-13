import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the rooms section heading", () => {
  render(<App />);

  expect(screen.getByText(/our rooms/i)).toBeInTheDocument();
});
