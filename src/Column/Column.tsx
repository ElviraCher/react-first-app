import React from "react";
import { Paragraph } from "../Paragraph/Paragraph.tsx";
import "./Column.css";

interface columnProps {
    columnCount: string,
    columnContent: string[],
    paragraphTextStyle: string,
}

export function Column(props: columnProps) {
    const columnCount: number[] = Array(+(props.columnCount)).fill(undefined);
    const listItems = columnCount.map((column, index) =>
        <div key = {index} className="column">
            <h5>Это колонка №{index+1}</h5>
            <Paragraph textStyle={props.paragraphTextStyle} text={props.columnContent[index]}/>
        </div>

    );

    return (
        <div className="column-container">
            {listItems}
        </div>
    );
}