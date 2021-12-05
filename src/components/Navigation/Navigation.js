import React from "react";
import { NavLink, Link } from "react-router-dom";
import Account from "../Account/Account";
import NavMob from "../NavMob/NavMob";

function Navigation(props) {
  const { isOpen, onClose, NavigationClick, windowWidth, loggedIn } = props;

  return (
    <div className="navigation">
      {loggedIn ? (
        <>
          {windowWidth <= 768 && (
              <NavMob
                isOpen={isOpen}
                onClose={onClose}
                NavigationClick={NavigationClick}
              />
          )}
          {windowWidth > 768 && (
            <div className="navigation__group">
              <nav>
                <div className="navigation__menu">
                  <NavLink
                    exact
                    to="/movies"
                    className="navigation__menu-link"
                    activeClassName="navigation__menu-link_active"
                  >
                    Фильмы
                  </NavLink>
                  <NavLink
                    exact
                    to="/saved-movies"
                    className="navigation__menu-link"
                    activeClassName="navigation__menu-link_active"
                  >
                    Сохраненные фильмы
                  </NavLink>
                </div>
              </nav>
              <NavLink
                exact
                to="/profile"
                className="account__block"
                activeClassName="navigation__menu-link_active"
              >
                <Account />
              </NavLink>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="navigation__block">
            <Link className="navigation__link" to="/signup">
              Регистрация
            </Link>

            <Link to="/signin">
              <button className="navigation__button">Войти</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Navigation;
