import React, { useState } from "react";

import ReactDOM from "react-dom";

import { Header } from "../Header/Header.tsx";
import { Paragraph } from "../Paragraph/Paragraph.tsx";
import { Column } from "../Column/Column.tsx";
import { SpaceBlock } from "../SpaceBlock/SpaceBlock.tsx";
import { Image } from "../Image/Image.tsx";
import { CollapsingBlock } from "../CollapsingBlock/CollapsingBlock.tsx";

import "./App.css";

function SmartComponent() {
  const [headerText, setHeaderText] = useState("");
  const [headerSize, setHeaderSize] = useState("");
  const [paragraphStyle, setParagraphStyle] = useState("normal");
  const [collapsingBlockText, setCollapsingBlockText] = useState("");
  const [paragraphText, setParagraphText] = useState("");
  const [isShown, setIsShown] = useState(true);
  const [columnCount, setColumnCount] = useState("");
  const [columnContent, setColumnContent] = useState([]);

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

  const headerSizePrompt = "Введите размер заголовка";
  const headerTextPrompt = "Введите текст заголовка";
  const paragraphStylePrompt =
    "Введите стиль параграфа. Доступные варианты: italic, bold, normal";
  const paragraphTextPrompt = "Введите текст параграфа";
  const columnsCountPrompt = "Сколько колонок будет на странице?";
  const columnsContentPrompt = "Введите текст колонки";

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
    let contentArray = [...columnContent];
    let c = +count;
    for (let i = c; i > 0; i -= 1) {
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
    setImageAtThePage(!imageAtThePage);
  };

  return (
    <>
      <button onClick={headerHandler}>Установить заголовок</button>
      <button onClick={collapsingBlockHandler}>
        Добавить схлопывающийся блок
      </button>
      <button onClick={paragraphHandler}>Добавить параграф</button>
      <button onClick={columnHandler}>Добавить колонки</button>
      <button onClick={imageHandler}>
        {imageAtThePage ? "Убрать картинку" : "Добавить картинку"}
      </button>
      <Header size={headerSize} text={headerText} headerClick={headerClick} />
      <CollapsingBlock text={collapsingBlockText} isShawn={isShown} />
      <Paragraph textStyle={paragraphStyle} text={paragraphText} />
      <Column
        columnCount={columnCount}
        columnContent={columnContent}
        paragraphTextStyle={paragraphStyle}
      />
      <SpaceBlock />
      <>{imageAtThePage ? <Image /> : null}</>
    </>
  );
}

function App() {
  return <SmartComponent />;
}

ReactDOM.render(<App />, document.getElementById("app"));
