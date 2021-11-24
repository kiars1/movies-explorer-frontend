import React from "react";
import { Link } from "react-router-dom";
import PromoImage from "../images/background.svg";

function Promo() {
  return <section className="promo">
  <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
  <img src={PromoImage} className="promo__image" alt="Логотип банера"/>
  </section>;
}

export default Promo;
