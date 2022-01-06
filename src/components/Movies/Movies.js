import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  const {
    windowWidth,
    isLoading,
    getMoviesAll,
    movies,
    resultMovies,
    handleSaveMovie,
    handleRemoveMovie,
    blockInput,
    savedMoviesAll
  } = props;

  document.title = `Фильмы`

  return (
    <main className="movies">
      <SearchForm
        blockInput={blockInput}
        getMoviesAll={getMoviesAll}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          windowWidth={windowWidth}
          movies={movies}
          allMovies={movies}
          resultMovies={resultMovies}
          handleSaveMovie={handleSaveMovie}
          handleRemoveMovie={handleRemoveMovie}
          savedMoviesAll={savedMoviesAll}
        />
      )}
    </main>
  );
}

export default Movies;
