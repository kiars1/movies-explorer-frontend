import React from "react";
import { Link } from "react-router-dom";
import Account from "../Account/Account";

function Navigation(props) {
  const {
    isOpen,
    onClose,
    NavigationClick,
  } = props



  return <div>
    <button className="navigation__bar" onClick={NavigationClick} ></button>
    <div className={`navigation__menu  ${isOpen && 'navigation__menu_oppened'}`}>
    <button className="navigation__close" onClick={onClose}></button>
    <div className="navigation__link">
      <Link to="/" className="navigation__title" onClick={onClose}>Главная</Link>
      <Link to="/movies" className="navigation__title navigation__title_active" onClick={onClose}>Фильмы</Link>
      <Link to="/saved-movies" className="navigation__title" onClick={onClose}>Сохраненные фильмы</Link>
    </div>
    <Account onClose={onClose}/>
    </div>
  </div>;
}

export default Navigation;