import React from "react";
import "./Header.css";

interface HeaderProps {
  size: string;
  text: string;
  headerClick?: () => {};
}

export function Header(props: HeaderProps) {
  let size = Math.round(+props.size).toString();
  if (props.size !== size) {
    size = "1";
  }

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
    case "3":
      return (
        <h3 className="header" onClick={props.headerClick} data-testid="header">
          {props.text}
        </h3>
      );
    case "4":
      return (
        <h4 className="header" onClick={props.headerClick} data-testid="header">
          {props.text}
        </h4>
      );
    case "5":
      return (
        <h5 className="header" onClick={props.headerClick} data-testid="header">
          {props.text}
        </h5>
      );
    case "6":
      return (
        <h6 className="header" onClick={props.headerClick} data-testid="header">
          {props.text}
        </h6>
      );
    default:
      return null;
  }
}
