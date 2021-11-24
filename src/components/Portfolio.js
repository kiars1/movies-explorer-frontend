import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__list">
        <a className="portfolio__link" href="https://kiars1.github.io/how-to-learn/"
                target="_blank">
          <p>Статичный сайт</p> 
          <p>↗</p>
        </a>
        <a className="portfolio__link" href="https://kiars1.github.io/russian-travel/"
                target="_blank">
          <p>Адаптивный сайт</p> 
          <p>↗</p>
        </a>
        <a className="portfolio__link" href="https://mesto.kiars1.nomoredomains.work/"
                target="_blank">
          <p>Одностраничное приложение</p> 
          <p>↗</p>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
