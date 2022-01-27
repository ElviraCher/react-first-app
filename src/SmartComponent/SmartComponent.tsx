import React, { useState } from "react";

import { Header } from "../Header/Header.tsx";
import { Paragraph } from "../Paragraph/Paragraph.tsx";
import { Column } from "../Column/Column.tsx";
import { SpaceBlock } from "../SpaceBlock/SpaceBlock.tsx";
import { Image } from "../Image/Image.tsx";
import { CollapsingBlock } from "../CollapsingBlock/CollapsingBlock.tsx";

import "./SmartComponent.css";

export function SmartComponent() {
  const [headerText, setHeaderText] = useState("");
  const [headerSize, setHeaderSize] = useState("");
  const [paragraphStyle, setParagraphStyle] = useState("normal");
  const [collapsingBlockText, setCollapsingBlockText] = useState("");
  const [paragraphText, setParagraphText] = useState("");
  const [isShown, setIsShown] = useState(true);
  const [columnCount, setColumnCount] = useState("");
  const [columnContent, setColumnContent] = useState<string[]>([]);
  const [imageFloat, setImageFloat] = useState("none");
  const [imageAtThePage, setImageAtThePage] = useState(false);

  function finishPrompt(data: string) {
    return data;
  }

  function checkPrompt(
    callback: (data: string) => string,
    promptMessage: string | null
  ) {
    let x = prompt(`${promptMessage}`);

    while (x === null) {
      x = checkPrompt(finishPrompt, promptMessage);
    }
    return callback(x);
  }

  const headerSizePrompt =
    "Введите размер заголовка: 1 - большой, 2 - средний, 3 - маленький";
  const headerTextPrompt = "Введите текст заголовка";
  const paragraphStylePrompt =
    "Введите стиль параграфа. Цифра '0' - обычный; '1' - курсив; '2'- жирный";
  const paragraphTextPrompt = "Введите текст параграфа";
  const columnsCountPrompt = "Сколько колонок будет на странице?";
  const columnsContentPrompt = "Введите текст колонки";
  const imageFloatPrompt =
    "Выберете выравнивание картинки: '0' - по левому краю; '1' - по правому краю; '2' - нет обтекания";

  const headerHandler = () => {
    const size = checkPrompt(finishPrompt, headerSizePrompt);
    const header = checkPrompt(finishPrompt, headerTextPrompt);
    setHeaderText(header);
    setHeaderSize(size);
  };

  const headerClick = () => {
    setIsShown(!isShown);
  };

  const collapsingBlockHandler = () => {
    const text = checkPrompt(finishPrompt, paragraphTextPrompt);
    setCollapsingBlockText(text);
  };

  const columnHandler = () => {
    const count = checkPrompt(finishPrompt, columnsCountPrompt);
    let content;
    let contentArray: [] | string[] = [];

    for (let i = +count; i > 0; i -= 1) {
      content = checkPrompt(finishPrompt, columnsContentPrompt);
      contentArray = [...contentArray, content];
    }
    setColumnCount(count);
    setColumnContent(contentArray);
  };

  const paragraphHandler = () => {
    const style = checkPrompt(finishPrompt, paragraphStylePrompt);
    const text = checkPrompt(finishPrompt, paragraphTextPrompt);
    setParagraphStyle(style);
    setParagraphText(text);
  };

  const imageHandler = () => {
    setImageAtThePage(true);
    const float = checkPrompt(finishPrompt, imageFloatPrompt);
    float === "0"
      ? setImageFloat("left")
      : float === "1"
      ? setImageFloat("right")
      : setImageFloat("none");
  };

  return (
    <div className="container">
      <div className="button-container">
        <button className="button" onClick={headerHandler}>
          {headerText ? "Изменить заголовок" : "Установить заголовок"}
        </button>
        <button className="button" onClick={collapsingBlockHandler}>
          {collapsingBlockText
            ? "Изменить подзаголовок"
            : "Установить подзаголовок"}
        </button>
        <button className="button" onClick={paragraphHandler}>
          {paragraphText ? "Изменить параграф" : "Добавить параграф"}
        </button>
        <button className="button" onClick={columnHandler}>
          {columnCount ? "Изменить колонки" : "Добавить колонки"}
        </button>
        <button className="button" onClick={imageHandler}>
          {imageAtThePage ? "Изменить обтекание картинки" : "Добавить картинку"}
        </button>
      </div>

      <div className="header-container">
        <Header size={headerSize} text={headerText} headerClick={headerClick} />
        <CollapsingBlock text={collapsingBlockText} isShawn={isShown} />
      </div>

      <Column
        columnCount={columnCount}
        columnContent={columnContent}
        paragraphTextStyle="0"
      />
      <SpaceBlock />
      <div className="main">
        <>{imageAtThePage ? <Image imageFloat={imageFloat} /> : null}</>
        <Paragraph textStyle={paragraphStyle} text={paragraphText} />
      </div>
    </div>
  );
}
