import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useValidation } from "../../utils/Validation.js";
import Preloader from "../Preloader/Preloader";

function Profile(props) {
  const {
    windowWidth,
    onSignOut,
    onUpdateUser,
    errorMesage,
    errorVision,
    isLoading,
    blockInput,
  } = props;

  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setIsValid } = useValidation();

  React.useEffect(() => {
    if (
      values["email"] === currentUser.email &&
      values["name"] === currentUser.name
    ) {
      setIsValid(false);
    }
    // eslint-disable-next-line
  }, [values]);

  //валидация
  React.useEffect(() => {
    values["name"] = currentUser.name;
    values["email"] = currentUser.email;
    // eslint-disable-next-line
  }, [currentUser]);

  //Передаем данные на уровень выше
  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser(values["name"], values["email"])
    setIsValid(false);
  }

  document.title = `${currentUser.name}`

  return (
    <main className="profile">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <h2
            className={`profile__title ${
              windowWidth > 768 && "profile__title_hidden"
            }`}
          >
            Привет, {currentUser.name}
          </h2>
          <form className="profile__form" onSubmit={handleSubmit}>
            <div className="profile__info">
              <p className="profile__subtitle">Имя</p>
              <p className="profile__subtitle">Email</p>
            </div>
            <div className="profile__info">
              <input
                disabled={blockInput}
                onChange={handleChange}
                className={`profile__input ${
                  errors["name"] !== undefined && errors["name"] !== "" && `profile__input_error`
                }`}
                defaultValue={currentUser.name}
                type="name"
                placeholder="Имя"
                minLength="2"
                maxLength="30"
                name="name"
                pattern="[А-Яа-яA-Za-z -]{1,}"
                required
              />
              <input
                disabled={blockInput}
                onChange={handleChange}
                className={`profile__input ${
                  errors["email"] !== undefined && errors["email"] !== "" && `profile__input_error`
                }`}
                type="Email"
                placeholder="Email"
                defaultValue={currentUser.email}
                minLength="2"
                maxLength="30"
                name="email"
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$"
                required
              />
            </div>
            <p
              className={`profile__alarm ${
                errors["name"] !== "" && `profile__alarm_active`
              } ${errors["email"] !== "" && `profile__alarm_active`}`}
            >
              {errors["email"]}
              {errors["name"]}
            </p>
            <p
              className={`profile__alarm ${
                errorVision && "profile__alarm_active"
              } ${
                errorMesage === `Данные обновлены` && "profile__alarm_green"
              }`}
            >
              {errorMesage}
            </p>
            <button
              className={`profile__button ${
                !isValid && `profile__button_disable`
              } `}
              type="submit"
              disabled={!isValid}
            >
              Редактировать
            </button>
            <button
              className="profile__button"
              type="submit"
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
          </form>
        </>
      )}
    </main>
  );
}

export default Profile;
