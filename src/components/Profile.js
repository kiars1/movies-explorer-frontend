import React from "react";

function Profile() {
  return (
    <main className="profile">
      <form className="profile__form">
        <div className="profile__info">
          <p className="profile__title">Имя</p>
          <p className="profile__title">Email</p>
        </div>
        <div className="profile__info">
          <input
            className="profile__input"
            type="name"
            placeholder="Имя"
            value="Виталий"
          />
          <input
            className="profile__input"
            type="Email"
            placeholder="Email"
            value="pochta@yandex.ru"
          />
        </div>
        <button className="profile__button" type="submit">
          Редактировать
        </button>
        <button className="profile__button" type="submit">
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
}

export default Profile;
