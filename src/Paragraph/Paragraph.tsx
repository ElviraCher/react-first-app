import React from "react";
import "./Paragraph.css";

interface ParagraphProps {
    textStyle: string;
    text: string;

}

export function Paragraph(props: ParagraphProps) {
    switch (props.textStyle) {
        case "normal":
            return (<p className="paragraph">{props.text}</p>);
        case "italic":
            return (<i className="paragraph">{props.text}</i>);
        case "bold":
            return (<b className="paragraph">{props.text}</b>);
    }
}

