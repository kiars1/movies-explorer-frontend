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
  } = props;

  const [checkWord, setCheckWord] = React.useState("");
  const [checkShort, setCheckShort] = React.useState(false);

  //Поиск
  const onSubmitForm = () => {
    getMoviesAll(checkWord, checkShort);
  };

  return (
    <main className="movies">
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
