import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo_1.svg";
import { useValidation } from "../../utils/Validation.js";
import Preloader from "../Preloader/Preloader";

function Login(props) {
  const { onAuthorizeUser, errorMesage, errorVision, isLoading } = props;
  const { values, handleChange, errors, isValid } = useValidation();

  //Передаем данные на уровень выше
  function handleSubmit(evt) {
    evt.preventDefault();

    onAuthorizeUser(values["email"], values["password"]);
  }

  return (
    <main className="autorization">
          {isLoading ?
      <Preloader /> :
      <>
      <Link to="/">
        <img src={Logo} className="autorization__logo" alt="Проект Муви" />
      </Link>
      <h1 className="autorization__heading">Рады видеть!</h1>
      <form className="autorization__form" onSubmit={handleSubmit}>
        <p className="autorization__tag">Email</p>
        <input
          onChange={handleChange}
          className={`autorization__input ${
            errors["email"] !== `autorization__input_error `
          }`}
          type="Email"
          placeholder="Email"
          name="email"
          minLength="2"
          maxLength="30"
          required
        />
        <p
          className={`autorization__alarm ${
            errors["email"] !== "" && `autorization__alarm_active`
          }`}
        >
          {errors["email"]}
        </p>
        <p className="autorization__tag">Пароль</p>
        <input
          onChange={handleChange}
          className={`autorization__input ${
            errors["password"] !== `autorization__input_error `
          }`}
          type="password"
          name="password"
          placeholder="Пароль"
          minLength="8"
          maxLength="30"
          required
        />
        <p
          className={`autorization__alarm ${
            errors["password"] !== "" && `autorization__alarm_active`
          }`}
        >
          {errors["password"]}
        </p>
        <p
          className={`autorization__alarm ${
            errorVision && `autorization__alarm_active`
          }`}
        >
          {errorMesage}
        </p>
        <button
          className={`autorization__button ${
            !isValid && `autorization__button_disable`
          } `}
          type="submit"
          disabled={!isValid}
        >
          Войти
        </button>
      </form>
      <p className="autorization__title">
        Ещё не зарегистрированы?
        <Link className="autorization__link" to="/signup">
          Регистрация
        </Link>
      </p>
      </>}
    </main>
  );
}

export default Login;
