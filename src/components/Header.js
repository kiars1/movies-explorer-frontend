import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import headerLogo from "../images/logo.svg";

function Header() {
  return (
    <header className="header header__landing">
      <Route path="/main">
        <Link to="/">
          <img src={headerLogo} className="header__logo" alt="Проект Муви" />
        </Link>
        <div className="header__block">
          <Link className="header__link" to="/signup">
            Регистрация
          </Link>

          <Link to="/signin">
            <button className="header__button">Войти</button>
          </Link>
        </div>
      </Route>

      <Route path={["/movie", "/saved-movie"]}>
        <Link to="/">
          <img src={headerLogo} className="header__logo" alt="Проект Муви" />
        </Link>
        <nav>
          <div className="header__menu">
            <Link to="/movie" className="header__menu-link">
              Фильмы
            </Link>
            <Link to="/saved-movie" className="header__menu-link">
              Сохраненные фильмы
            </Link>
          </div>
        </nav>
        <div className="header__block">
          <p className="header__email">Акакунт</p>

          <Link to="/profile">
            <div className="header__profile" />
          </Link>
        </div>
      </Route>
    </header>
  );
}

export default Header;
