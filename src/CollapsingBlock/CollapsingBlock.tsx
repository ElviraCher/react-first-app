import React from "react";
import "./CollapsingBlock.css";

interface CollapsingBlockProps {
  text: string;
  isShawn: boolean;
}

export function CollapsingBlock(props: CollapsingBlockProps) {
  const isShawn = props.isShawn;
  if (isShawn) {
    return (
      <React.Fragment>
        <p className="collapsing-block">{props.text}</p>
      </React.Fragment>
    );
  } else {
    return null;
  }
}
