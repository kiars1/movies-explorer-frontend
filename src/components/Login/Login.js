import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";

function Login() {
  return (
      <section className="autorization">
      <Link to="/"><img src={Logo} className="autorization__logo" alt="Проект Муви" /></Link>
      <h1 className="autorization__heading">Рады видеть!</h1>
      <form className="autorization__form">
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
        <p className="autorization__alarm">Что-то пошло не так...</p>
        <Link to="/movies"><button className="autorization__button" type="submit">
        Войти
        </button></Link> {/* Данный линк сделан только для удобства проверки в дальнейшем будет удалён*/}
      </form>
      <p className="autorization__title">
      Ещё не зарегистрированы?
        <Link className="autorization__link" to="/signup">
        Регистрация
        </Link>
      </p>
    </section>
  );
}

export default Login;
