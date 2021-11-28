import React from "react";

import PromoImage from "../../images/Background.svg";

function Promo() {
  return <section className="promo">
  <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
  <img src={PromoImage} className="promo__image" alt="Логотип банера"/>
  </section>;
}

export default Promo;
