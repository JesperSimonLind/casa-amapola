import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import * as sanityClient from "./cms/client";

test("renders the rooms section heading", async () => {
  const fetchContent = jest.spyOn(sanityClient, "loadPublishedContent")
    .mockResolvedValue({ pages: {} });
  render(<App />);

  expect(await screen.findByText(/^our rooms$/i)).toBeInTheDocument();
  fetchContent.mockRestore();
});
