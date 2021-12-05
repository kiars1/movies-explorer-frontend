import React from "react";
import { Route } from "react-router-dom";

function Footer(props) {
  const {
    year,
  } = props

  return (
    <Route exact path={["/", "/movies", "/saved-movies"]}>
      <footer className="footer">
        <h2 className="footer__heading">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__information">
          <p className="footer__copyright">© {year}</p>
          <nav>
            <ul className="footer__menu">
              <li>
                <a
                  href="https://practicum.yandex.ru"
                  target="_blank"
                  className="footer__menu-link"
                  rel="noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kiars1"
                  target="_blank"
                  className="footer__menu-link"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="footer__menu-link"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </Route>
  );
}

export default Footer;
