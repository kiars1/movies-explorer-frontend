import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const {
    windowWidth,
    movies,
    resultMovies,
    savedMovies,
    handleSaveMovie,
    handleRemoveMovie,
  } = props;

  const [showCards, setShowCards] = React.useState(windowWidth > 768 ? 12 : windowWidth > 480 ? 8 : 5 );
  const [addCards, setAddCards] = React.useState(windowWidth > 768 ? 3 : 2);

  return (
    <section>
      {movies.length === 0 ? (
        <p className="movies-card-list__title">{resultMovies}</p>
      ) : (
        <>
          <ul className="movies-card-list">
            {movies.slice(0, showCards).map((movie) => {
              return (
                <MoviesCard
                  windowWidth={windowWidth}
                  key={movie.id || movie.movieId}
                  movie={movie}
                  savedMovies={savedMovies}
                  handleSaveMovie={handleSaveMovie}
                  handleRemoveMovie={handleRemoveMovie}
                />
              );
            })}
          </ul>
          <button className={`movies-card-list__button ${ showCards >= movies.length && `movies-card-list__button_disable` }`} onClick={() => setShowCards(showCards + addCards)}>Ещё</button>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
