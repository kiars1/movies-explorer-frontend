import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";

function Register() {
  return (
    <main className="autorization">
      <Link to="/"><img src={Logo} className="autorization__logo" alt="Проект Муви" /></Link>
      <h1 className="autorization__heading">Добро пожаловать!</h1>
      <form className="autorization__form">
        <p className="autorization__tag">Имя</p>
        <input className="autorization__input" type="name" placeholder="Имя" />
        <p className="autorization__alarm">Что-то пошло не так...</p>
        <p className="autorization__tag">Email</p>
        <input className="autorization__input" type="Email" placeholder="Email" />
        <p className="autorization__alarm">Что-то пошло не так...</p>
        <p className="autorization__tag">Пароль</p>
        <input
          className="autorization__input"
          type="password"
          placeholder="Пароль"
        />
        <p className="autorization__alarm">Что-то пошло не так...</p>
        <button className="autorization__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <p className="autorization__title">
        Уже зарегистрированы?
        <Link className="autorization__link" to="/signin">
          Войти
        </Link>
      </p>
    </main>
  );
}

export default Register;
