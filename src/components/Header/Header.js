import React from "react";
import { Route, Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Account from "../Account/Account";
import headerLogo from "../../images/Logo_1.svg";

function Header(props) {
  const {
    isOpen,
    onClose,
    NavigationClick,
    windowWidth,
  } = props

  return (
    <>
      <Route exact path="/">
        <header className="header header__landing">
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
        </header>
      </Route>

      <Route path={["/movies", "/saved-movies", "/profile"]}>
        <header className="header">
          <Link to="/">
            <img src={headerLogo} className="header__logo" alt="Проект Муви" />
          </Link>
          {windowWidth <= 768 && <Navigation isOpen={isOpen} onClose={onClose} NavigationClick={NavigationClick}/>}
          {windowWidth > 768 && (
            <>
              <nav>
                <div className="header__menu">
                  <Link to="/movies" className="header__menu-link">
                    Фильмы
                  </Link>
                  <Link to="/saved-movies" className="header__menu-link">
                    Сохраненные фильмы
                  </Link>
                </div>
              </nav>
              <Account />
            </>
          )}
        </header>
      </Route>
    </>
  );
}

export default Header;
