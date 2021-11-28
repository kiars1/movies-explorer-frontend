import React from "react";

import Avatar from "../../images/Avatar.JPG";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="main__title">Студент</h2>
      <div className="about-me__info">
        <div>
          <h3 className="about-me__title">Кирилл</h3>
          <h4 className="about-me__subtitle">Фронтенд-разработчик, 27 лет</h4>
          <p className="about-me__description">
            Я родился и живу в Новосибирск, закончил гуманитарный факультет
            НГТУ. Я люблю слушать музыку, а ещё увлекаюсь играми. Недавно начал
            кодить. С 2021 года начал увслекаться написанием сатов на WIX и
            UCOZ. После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me__menu">
            <li>
              <a href="https://facebook.com"
                target="_blank" className="about-me__link" rel="noreferrer">Facebook</a>
            </li>
            <li>
              <a href="https://github.com/kiars1"
                target="_blank" className="about-me__link" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img src={Avatar} className="about-me__avatar" alt="Кирилл" />
      </div>
    </section>
  );
}

export default AboutMe;
