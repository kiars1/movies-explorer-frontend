import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  const {
    windowWidth,
  } = props
  
  return (
    <main className="savedmovies">
      <SearchForm />
      <MoviesCardList windowWidth={windowWidth}/>
    </main>
  );
}

export default SavedMovies;
