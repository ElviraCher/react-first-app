import React from "react";
import "./Paragraph.css";

interface ParagraphProps {
  textStyle: string;
  text: string;
}

export function Paragraph(props: ParagraphProps) {
  switch (props.textStyle) {
    case "1":
      return <i className="paragraph">{props.text}</i>;
    case "2":
      return <b className="paragraph">{props.text}</b>;
    default:
      return <p className="paragraph">{props.text}</p>;
  }
}
