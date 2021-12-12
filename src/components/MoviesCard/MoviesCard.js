import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const {
    windowWidth,
    movie,
    savedMovies,
    handleSaveMovie,
    handleRemoveMovie,
    savedMoviesAll,
  } = props;

  const location = useLocation();

  const id = movie.id

  // console.log(savedMovies)
  //Проверка массива на совпадение с сохраненными фильмами
  function checkSave(savedMovies, id) {
    if (savedMovies != null) {
    for(var i=0;i<savedMovies.length;i++){
      if(savedMovies[i].movieId==id) return true;
    }
    return false;
  }}

  const [isLike, setIsLike] = React.useState();
  
  React.useEffect(() => {
    setIsLike(checkSave(savedMoviesAll, id))})

  return (
    <>
      <li className="movies-card">
        <a
        href={location.pathname === "/movies" ? (movie.trailerLink) : (movie.thumbnail)}
          className="movies-card__image"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
            <img
              src={location.pathname === "/movies" ? (`https://api.nomoreparties.co${movie.image.url}`) : (movie.image)}
              className="movies-card__image"
              alt={movie.nameRU}
            />
        </a>
        <p className="movies-card__title">{movie.nameRU}</p>
        <p className="movies-card__time">
          {movie.duration % 60 === 0
            ? `${movie.duration / 60} ч`
            : movie.duration > 60
            ? `${Math.floor(movie.duration / 60)} ч ${movie.duration % 60} мин`
            : `${movie.duration} мин`}
        </p>
        <button
          className={`movies-card__save ${location.pathname === "/saved-movies" && "movies-card__save_disable"} ${
            isLike && "movies-card__save_disable"
          } ${windowWidth < 500 && "movies-card__save_mobile"}`}
          onClick={() => {
            handleSaveMovie(movie);
          }}
        >
          Сохранить
        </button>
        <button
          className={`movies-card__delete ${location.pathname === "/movies" && "movies-card__delete_disable"} ${
            windowWidth < 500 && "movies-card__delete_mobile"
          }`}
          onClick={() => {
            handleRemoveMovie(movie._id);
          }}
        ></button>
        <button className={`movies-card__liked ${!isLike && "movies-card__liked_disable"} ${isLike && "movies-card__liked_opened"}`} onClick={() => {
          const filmId = savedMovies.find((film) => film.movieId == movie.id)._id
          handleRemoveMovie(filmId)
          }}></button>
      </li>
    </>
  );
}

export default MoviesCard;
