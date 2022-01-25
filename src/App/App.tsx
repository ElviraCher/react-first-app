import React, { useState } from "react";

import ReactDOM from "react-dom";

import { Header }  from "../Header/Header.tsx";
import { Paragraph } from "../Paragraph/Paragraph.tsx"
import { Column } from "../Column/Column.tsx";
import {SpaceBlock} from "../SpaceBlock/SpaceBlock.tsx";
import {Image} from "../Image/Image.tsx";
import {CollapsingBlock} from "../CollapsingBlock/CollapsingBlock.tsx";

import "./App.css"

export function App(){
  const text =
      `Я откланялся. Урядник привел меня в избу, стоявшую на высоком берегу реки,
     на самом краю крепости. Половина избы занята была семьею Семена Кузова,
      другую отвели мне. Она состояла из одной горницы довольно опрятной, разделенной
       надвое перегородкой. Савельич стал в ней распоряжаться; я стал глядеть в узенькое окошко.
        Передо мною простиралась печальная степь. Наискось стояло несколько избушек; по улице
         бродило несколько куриц. Старуха, стоя на крыльце с корытом, кликала свиней, которые
          отвечали ей дружелюбным хрюканьем. И вот в какой стороне осужден я был проводить
           мою молодость! Тоска взяла меня; я отошел от окошка и лег спать без ужина, несмотря
            на увещания Савельича, который повторял с сокрушением: «Господи владыко! ничего кушать
             не изволит! Что скажет барыня, коли дитя занеможет?»`;

  const columnContent = [
    "Подходя к комендантскому дому, мы увидели на площадке человек двадцать стареньких инвалидов с длинными косами и в треугольных шляпах.",
    "Впереди стоял комендант, старик бодрый и высокого росту, в колпаке и в китайчатом халате.",
    "Мы остановились было смотреть на учение; но он просил нас идти к Василисе Егоровне, обещаясь быть вслед за нами. «А здесь, — прибавил он, — нечего вам смотреть».",
    "Мы сели обедать. Василиса Егоровна не умолкала ни на минуту и осыпала меня вопросами: кто мои родители, живы ли они, где живут и каково их состояние? Услыша, что у батюшки триста душ крестьян, «легко ли! — сказала она, — ведь есть же на свете богатые люди! А у нас, мой батюшка, всего-то душ одна девка Палашка; да слава богу, живем помаленьку.",
    "Прошло несколько недель, и жизнь моя в Белогорской крепости сделалась для меня не только сносною, но даже и приятною. В доме коменданта был я принят как родной."
  ]

  let headerSize = "Введите размер заголовка";
  const headerText = "Введите текст заголовка";
  const columnCount = "Введите количество колонок";

  function finishPrompt(data: string) {
    return data;
  }

  function checkPrompt(callback: (data: string) => string, promptMessage: string | null) {
    let x = prompt(`${promptMessage}`);

    while (x === null) {
      x = checkPrompt(finishPrompt, promptMessage);
    }

    return callback(x);
  }

  const size = checkPrompt(finishPrompt, headerSize);
  const header = checkPrompt(finishPrompt, headerText);
  const count = checkPrompt(finishPrompt, columnCount);




  function App2(){
    const [isShown, setIsShown] = useState(true);

    const headerClick = () => {
      setIsShown(!isShown);
    }

    return (
        <React.StrictMode>
          <div className="container">
            <Header size={size} text={header} headerClick={headerClick}/>
              <CollapsingBlock text="Схлопывающийся блок. По идее должен схлопнутся при нажатии на заголовок"  isShawn={isShown}/>
              <SpaceBlock/>
              <Column columnCount = {count} columnContent = {columnContent} paragraphTextStyle="italic"/>
              <Paragraph textStyle="bold" text={text}/>
              <Image/>
          </div>
        </React.StrictMode>
    );
  }

  return (
      <>
        <App2/>
      </>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
