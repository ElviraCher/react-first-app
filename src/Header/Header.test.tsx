import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "./Header.tsx";

describe("Header", () => {
  it("returns React component", () => {
    const size = "1";
    const text = "Hello!";
    render(<Header size={size} text={text} />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
  it("changes size by props", () => {
    render(<Header size="2" text="I am header" />);
    const header = screen.getByTestId("header");

    expect(header.innerHTML).toBe("I am header");
    expect(header.tagName).toBe("H2");
  });
  it("always returns valid tag", () => {
    render(<Header size="5.12" text="I am header" />);
    const header = screen.getByTestId("header");

    expect(header.tagName).toBe("H3");
  });
});
