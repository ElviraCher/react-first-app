import React from "react";
import "./Image.css";

interface imageProps {
  imageFloat: string;
}

export function Image(props: imageProps) {
  return (
    <React.Fragment>
      <img
        className={`${props.imageFloat} image`}
        src="https://i.picsum.photos/id/491/300/500.jpg?hmac=KBr3xoJ6kpyrrM-FS2RSrTnVhn-lZJkERo3ujSGHzng"
      />
    </React.Fragment>
  );
}
