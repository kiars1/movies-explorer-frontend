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
    savedMovies,
    handleSaveMovie,
    handleRemoveMovie,
    blockInput
  } = props;

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
          savedMovies={savedMovies}
          handleSaveMovie={handleSaveMovie}
          handleRemoveMovie={handleRemoveMovie}
        />
      )}
    </main>
  );
}

export default Movies;
