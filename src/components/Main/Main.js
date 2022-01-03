import React from "react";

import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Main(props) {
  const {
    myAge,
  } = props
  return (
    <main className="main">
      <div className="root__index">{document.title = `Дипломный проект "Movies"`}</div>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe myAge={myAge}/>
        <Portfolio />
    </main>
  );
}

export default Main;
