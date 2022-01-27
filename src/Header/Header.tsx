import React from "react";
import "./Header.css";

interface HeaderProps {
  size: string;
  text: string;
  headerClick?: () => {};
}

export function Header(props: HeaderProps) {
  let size = Math.round(+props.size).toString();

  switch (size) {
    case "1":
      return (
        <h1 className="header" onClick={props.headerClick} data-testid="header">
          {props.text}
        </h1>
      );
    case "2":
      return (
        <h2 className="header" onClick={props.headerClick} data-testid="header">
          {props.text}
        </h2>
      );
    default:
      return (
        <h3 className="header" onClick={props.headerClick} data-testid="header">
          {props.text}
        </h3>
      );
  }
}
