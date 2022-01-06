import React from "react";

function Techs() {
  return (
    <section className="techs">
      <h2 className="main__title main__title_position">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__table">
        <li className="techs__stack">HTML</li>
        <li className="techs__stack">CSS</li>
        <li className="techs__stack">JS</li>
        <li className="techs__stack">React</li>
        <li className="techs__stack">Git</li>
        <li className="techs__stack">Express.js</li>
        <li className="techs__stack">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;