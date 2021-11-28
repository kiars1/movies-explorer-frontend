import React from "react";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <input className="search-form__input" type="film" placeholder="Фильм" />
        <button className="search-form__button">Найти</button>
      </form>
      <div className="search-form__block">
        <label className="search-form__switch">
          <input type="checkbox" className="search-form__checkbox" />
          <span className="search-form__slider"></span>
        </label>
        <p>Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
