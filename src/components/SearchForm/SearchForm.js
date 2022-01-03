import React from "react";
import { useLocation } from "react-router-dom";

function SearchForm(props) {
  const { blockInput, getMoviesSave, getMoviesAll } = props;
  const location = useLocation();

  const wordSM = localStorage.getItem("wordSM");
  const shortSM = JSON.parse(localStorage.getItem("shortSM"));
  const wordM = localStorage.getItem("wordM");
  const shortM = JSON.parse(localStorage.getItem("shortM"));

  const [word, setWord] = React.useState("");
  const [short, setShort] = React.useState(false);

  React.useEffect(() => {
    if (wordM != null) {
    location.pathname === "/movies" ? setWord(wordM) : console.log('https://youtu.be/dQw4w9WgXcQ');
  }
  if (wordSM != null) {
    location.pathname === "/movies" ? console.log('https://youtu.be/dQw4w9WgXcQ') : setWord(wordSM);
  }

    location.pathname === "/movies" ? setShort(shortM) : setShort(shortSM);
    // eslint-disable-next-line
  }, [wordSM, shortSM, wordM, shortM]);

  function handleChangeWord(evt) {
    setWord(evt.target.value)
  }

  function handleChangeShort(evt) {
    setShort(evt.target.checked)
      if (evt.target.checked === true) {
      setShort(true);
      // eslint-disable-next-line
      {
        location.pathname === "/movies"
          ? getMoviesAll(word, true)
          : getMoviesSave(word, true);

        location.pathname === "/movies"
          ? localStorage.setItem("shortM", JSON.stringify(true))
          : localStorage.setItem("shortSM", JSON.stringify(true));
      }
    } else {
      setShort(false);
      // eslint-disable-next-line
      {
        location.pathname === "/movies"
          ? getMoviesAll(word, false)
          : getMoviesSave(word, false);

        location.pathname === "/movies"
          ? localStorage.setItem("shortM", JSON.stringify(false))
          : localStorage.setItem("shortSM", JSON.stringify(false));
      }
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    location.pathname === "/movies"
      ? localStorage.setItem("wordM", word)
      : localStorage.setItem("wordSM", word);

    location.pathname === "/movies"
      ? localStorage.setItem("shortM", JSON.stringify(short))
      : localStorage.setItem("shortSM", JSON.stringify(short));

    location.pathname === "/movies"
      ? getMoviesAll(word, short)
      : getMoviesSave(word, short);
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input
          value={word || ""}
          name="word"
          disabled={blockInput}
          className="search-form__input"
          type="film"
          placeholder="Фильм"
          onChange={handleChangeWord}
        />
        <button className="search-form__button">Найти</button>
      </form>
      <div className="search-form__block">
        <label className="search-form__switch">
          <input
            checked={short || false}
            disabled={blockInput}
            name="short"
            type="checkbox"
            className="search-form__checkbox"
            onChange={handleChangeShort}
          />
          <span className="search-form__slider"></span>
        </label>
        <p>Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
