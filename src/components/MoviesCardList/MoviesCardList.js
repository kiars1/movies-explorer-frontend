import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section>
      <ul className="movies-card-list">
        <MoviesCard />
      </ul>
      <button className="movies-card-list__button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
