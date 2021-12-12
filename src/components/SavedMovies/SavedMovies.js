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
    blockInput
  } = props;

  return (
    <main className="savedmovies">
      <SearchForm
        blockInput={blockInput}
        getMoviesSave={getMoviesSave}
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
