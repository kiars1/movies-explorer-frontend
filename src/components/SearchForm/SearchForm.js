import React from "react";

function SearchForm(props) {
  const {checkWord, setCheckWord, setCheckShort, onSubmitForm} = props

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={(evt) => {
            evt.preventDefault();
            onSubmitForm();
          }}>
        <input className="search-form__input" type="film" placeholder="Фильм" value={checkWord}
          onChange={(evt) => setCheckWord(evt.target.value)}/>
        <button className="search-form__button">Найти</button>
      </form>
      <div className="search-form__block">
        <label className="search-form__switch">
          <input type="checkbox" className="search-form__checkbox" onChange={(evt) => {
              if (evt.target.checked) {
                setCheckShort(true);
              } else {
                setCheckShort(false);
              }}}/>
          <span className="search-form__slider"></span>
        </label>
        <p>Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
