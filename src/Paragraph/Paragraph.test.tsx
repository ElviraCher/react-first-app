import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Paragraph } from "./Paragraph.tsx";

describe("Paragraph", () => {
  it("returns React component", () => {
    const textStyle = "0";
    const text = "Hello!";
    render(<Paragraph textStyle={textStyle} text={text} />);
    const paragraph = screen.getByTestId("paragraph-normal");
    expect(paragraph).toBeInTheDocument();
  });
  it("changes style and text by props", () => {
    const textStyle = ["0", "1", "2"];
    const text = ["Hello!", "Goodbye", "How are you?"];

    render(<Paragraph textStyle={textStyle[0]} text={text[0]} />);
    const paragraphN = screen.getByTestId("paragraph-normal");

    expect(paragraphN.innerHTML).toBe("Hello!");
    expect(paragraphN.tagName).toBe("P");

    render(<Paragraph textStyle={textStyle[1]} text={text[1]} />);
    const paragraphI = screen.getByTestId("paragraph-italic");

    expect(paragraphI.innerHTML).toBe("Goodbye");
    expect(paragraphI.tagName).toBe("I");

    render(<Paragraph textStyle={textStyle[2]} text={text[2]} />);
    const paragraphB = screen.getByTestId("paragraph-bold");

    expect(paragraphB.innerHTML).toBe("How are you?");
    expect(paragraphB.tagName).toBe("B");
  });
  it("always returns valid tag", () => {
    render(<Paragraph textStyle={"abc"} text={"Text"} />);
    const paragraph = screen.getByTestId("paragraph-normal");

    expect(paragraph.tagName).toBe("P");
  });
});
