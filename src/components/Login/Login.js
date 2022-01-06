import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo_1.svg";
import { useValidation } from "../../utils/Validation.js";
import Preloader from "../Preloader/Preloader";
import Eye_open from "../../images/Eye_open.png";
import Eye_close from "../../images/Eye_close.png";

function Login(props) {
  const {
    onAuthorizeUser,
    errorMesage,
    errorVision,
    isLoading,
    onRouteChange,
    blockInput,
  } = props;
  const { values, handleChange, errors, isValid } = useValidation();
  const [isVisiblePassword, setisVisiblePassword] = React.useState("password");

  //валидация
  function handleVisibleChange() {
    setisVisiblePassword(
      isVisiblePassword === "password" ? "text" : "password"
    );
  }

  //Передаем данные на уровень выше
  function handleSubmit(evt) {
    evt.preventDefault();

    onAuthorizeUser(values["email"], values["password"]);
  }

  document.title = `Войти`

  return (
    <main className="autorization">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
            <Link to="/">
            <img src={Logo} className="autorization__logo" alt="Проект Муви" />
            </Link>
          <h1 className="autorization__heading">Рады видеть!</h1>
          <form className="autorization__form" onSubmit={handleSubmit}>
            <p className="autorization__tag">Email</p>
            <input
              disabled={blockInput}
              onChange={handleChange}
              className={`autorization__input ${
                errors["email"] !== "" && `autorization__input_error `
              }`}
              type="Email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$"
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
              disabled={blockInput}
              onChange={handleChange}
              className={`autorization__input ${
                errors["password"] !== "" && `autorization__input_error `
              }`}
              type={isVisiblePassword}
              name="password"
              placeholder="Пароль"
              minLength="8"
              maxLength="30"
              required
            />
            {isVisiblePassword === `password` ? (
              <img
                src={Eye_close}
                onClick={handleVisibleChange}
                className="autorization__password"
                alt="password"
              />
            ) : (
              <img
                src={Eye_open}
                onClick={handleVisibleChange}
                className="autorization__password"
                alt="password"
              />
            )}
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
            <Link
              className="autorization__link"
              to="/signup"
              onClick={onRouteChange}
            >
              Регистрация
            </Link>
          </p>
        </>
      )}
    </main>
  );
}

export default Login;
