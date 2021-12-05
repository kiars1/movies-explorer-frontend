import React from "react";
import { NavLink } from "react-router-dom";
import Account from "../Account/Account";

function NavMob(props) {
  const { isOpen, onClose, NavigationClick } = props;

  return (
    <div className="navmob">
      <button className="navmob__bar" onClick={NavigationClick}></button>
      <div className={`navmob__background ${isOpen && "navmob__background_oppened"}`}>
      <div className={`navmob__menu ${isOpen && "navmob__menu_oppened"}`}>
          <button className="navmob__close" onClick={onClose}></button>
          <div className="navmob__link">
            <NavLink
              exact
              to="/"
              className="navmob__title"
              activeClassName="navmob__title_active"
              onClick={onClose}
            >
              Главная
            </NavLink>
            <NavLink
              exact
              to="/movies"
              className="navmob__title"
              activeClassName="navmob__title_active"
              onClick={onClose}
            >
              Фильмы
            </NavLink>
            <NavLink
              exact
              to="/saved-movies"
              className="navmob__title"
              activeClassName="navmob__title_active"
              onClick={onClose}
            >
              Сохраненные фильмы
            </NavLink>
          </div>
          <NavLink exact
                to="/profile"
                className="navmob__block"
                activeClassName="navmob__title_active">
          <Account onClose={onClose} />
          </NavLink>
        </div>
        </div>
    </div>
  );
}

export default NavMob;
