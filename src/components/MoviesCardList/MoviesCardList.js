import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const {
    windowWidth,
  } = props

  return (
    <section>
      <ul className="movies-card-list">
        <MoviesCard windowWidth={windowWidth}/>
      </ul>
      <button className="movies-card-list__button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
