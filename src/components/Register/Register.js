import React from "react";
import { Link } from "react-router-dom";
import { useValidation } from "../../utils/Validation.js";
import Preloader from "../Preloader/Preloader";
import Logo from "../../images/Logo_1.svg";
import Eye_open from "../../images/Eye_open.png";
import Eye_close from "../../images/Eye_close.png";

function Register(props) {
  const { onRegisterUser, errorMesage, errorVision, isLoading, onRouteChange } = props;
  const { values, handleChange, errors, isValid } = useValidation();
  const [isVisiblePassword, setisVisiblePassword] = React.useState("password");

  //Скрытие/Раскрытие видимости пароля
  function handleVisibleChange() {
    setisVisiblePassword(
      isVisiblePassword === "password" ? "text" : "password"
    );
  }

  //Передаем данные на уровень выше
  function handleSubmit(evt) {
    evt.preventDefault();

    onRegisterUser(values["name"], values["email"], values["password"]);
  }


  return (
    <main className="autorization">
          {isLoading ?
      <Preloader /> :
      <>
      <Link to="/">
        <img src={Logo} className="autorization__logo" alt="Проект Муви" />
      </Link>
      <h1 className="autorization__heading">Добро пожаловать!</h1>
      <form className="autorization__form" onSubmit={handleSubmit}>
        <p className="autorization__tag">Имя</p>
        <input
          className={`autorization__input ${
            errors["name"] !== `autorization__input_error`
          }`}
          type="name"
          placeholder="Имя"
          name="name"
          onChange={handleChange}
          minLength="2"
          maxLength="30"
          pattern="[А-Яа-яA-Za-z -]{1,}"
          required
        />
        <p
          className={`autorization__alarm ${
            errors["name"] !== "" && `autorization__alarm_active`
          }`}
        >
          {errors["name"]}
        </p>
        <p className="autorization__tag">Email</p>
        <input
          className={`autorization__input ${
            errors["email"] !== `autorization__input_error`
          }`}
          type="Email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
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
          className={`autorization__input ${
            errors["password"] !== `autorization__input_error`
          }`}
          type={isVisiblePassword}
          placeholder="Пароль"
          name="password"
          onChange={handleChange}
          minLength="8"
          maxLength="30"
          required
        />{isVisiblePassword === `password` ? <img src={Eye_close} onClick={handleVisibleChange} className="autorization__password" alt="password"/> :
        <img src={Eye_open} onClick={handleVisibleChange} className="autorization__password"  alt="password"/>}
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
          Зарегистрироваться
        </button>
      </form>
      <p className="autorization__title">
        Уже зарегистрированы?
        <Link className="autorization__link" to="/signin" onClick={onRouteChange}>
          Войти
        </Link>
      </p>
      </>}
    </main>
  );
}

export default Register;
