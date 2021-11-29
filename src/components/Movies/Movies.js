import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  const {
    windowWidth,
  } = props

  return <main className="movies">
    <SearchForm />
    <MoviesCardList windowWidth={windowWidth}/>
  </main>;
}

export default Movies;