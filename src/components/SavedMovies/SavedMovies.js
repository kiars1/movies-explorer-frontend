import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  const {
    windowWidth,
    isLoading,
    getMoviesSave,
    savedMovies,
    resultMovies,
    handleSaveMovie,
    handleRemoveMovie,
  } = props;

  const [checkWord, setCheckWord] = React.useState("");
  const [checkShort, setCheckShort] = React.useState(false);

  //Поиск
  const onSubmitForm = () => {
    getMoviesSave(checkWord, checkShort);
  };

  return (
    <main className="savedmovies">
      <SearchForm
        setCheckShort={setCheckShort}
        checkWord={checkWord}
        setCheckWord={setCheckWord}
        onSubmitForm={onSubmitForm}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          windowWidth={windowWidth}
          movies={savedMovies}
          savedMovies={savedMovies}
          resultMovies={resultMovies}
          handleSaveMovie={handleSaveMovie}
          handleRemoveMovie={handleRemoveMovie}
        />
      )}
    </main>
  );
}

export default SavedMovies;
