import React from "react";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="main__title">О проекте</h2>
      <div className="about-project__table">
        <div>
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__bunch">
          <p className="about-project__caption about-project__caption_position-first">1 неделя</p>
          <p className="about-project__caption">Back-end</p>
        </div>
        <div className="about-project__bunch">
          <p className="about-project__caption about-project__caption_position-second">4 недели</p>
          <p className="about-project__caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
