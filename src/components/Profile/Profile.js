import React from "react";

function Profile(props) {
  const {
    windowWidth,
  } = props

  return (
    <main className="profile">
      <h2 className={`profile__title ${windowWidth > 768 && "profile__title_hidden"}`}>Привет, Виталий!</h2>
      <form className="profile__form">
        <div className="profile__info">
          <p className="profile__subtitle">Имя</p>
          <p className="profile__subtitle">Email</p>
        </div>
        <div className="profile__info">
          <input
            className="profile__input"
            type="name"
            placeholder="Имя"
            defaultValue="Виталий"
          />
          <input
            className="profile__input"
            type="Email"
            placeholder="Email"
            defaultValue="pochta@yandex.ru"
          />
        </div>
        <button className="profile__button" type="submit">
          Редактировать
        </button>
        <button className="profile__button" type="submit">
          Выйти из аккаунта
        </button>
        <p className="profile__alarm">Что-то пошло не так</p>
        <button className="profile__button profile__button_hidden profile__button_disable" type="submit">
          Сохранить
        </button>
      </form>
    </main>
  );
}

export default Profile;
