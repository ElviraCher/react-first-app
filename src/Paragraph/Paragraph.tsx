import React from "react";
import "./Paragraph.css";

interface ParagraphProps {
  textStyle: string;
  text: string;
}

export function Paragraph(props: ParagraphProps) {
  switch (props.textStyle) {
    case "1":
      return (
        <i className="paragraph" data-testid="paragraph-italic">
          {props.text}
        </i>
      );
    case "2":
      return (
        <b className="paragraph" data-testid="paragraph-bold">
          {props.text}
        </b>
      );
    default:
      return (
        <p className="paragraph" data-testid="paragraph-normal">
          {props.text}
        </p>
      );
  }
}
