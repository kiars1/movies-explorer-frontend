import React from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import * as MainApi from "../../utils/MainApi.js";
import * as MoviesApi from "../../utils/MoviesApi.js";

function App() {
  let now = new Date(); //Текущя дата
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
  let year = now.getFullYear(); //Текущий год
  const myYear = new Date("1994/05/18"); //Дата рождения
  let myYearNow = new Date(
    today.getFullYear(),
    myYear.getMonth(),
    myYear.getDate()
  ); //ДР в текущем году
  let myAge; //Возраст

  //Возраст = текущий год - год рождения
  myAge = today.getFullYear() - myYear.getFullYear();
  //Если ДР в этом году ещё предстоит, то вычитаем из age один год
  if (today < myYearNow) {
    myAge = myAge - 1;
  }

  const shortFilm = 40;

  const [isHandleNavigationClick, setIsHandleNavigationClick] =
    React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [errorMesage, setErrorMesage] = React.useState("");
  const [errorVision, setErrorVision] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [resultMovies, setResultMovies] = React.useState("");
  const [resultSavedMovies, setResultSavedMovies] = React.useState("");

  const [loggedIn, setLoggedIn] = React.useState(true); //это специальный костыль. Чтобы при перезагрузки страницы не выбрасывало на "/"
  const history = useHistory();

  // Проверяем токен
  React.useEffect(() => {
    if (localStorage.getItem("jwt")) {
      MainApi.getUserInfo(localStorage.getItem("jwt"))
        .then(() => {
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoggedIn(false); //этот специальный костыль правится сразу же. Пользователь даже не видет защищеных страниц.
    }
  }, []);

  //Регистрация пользователя
  function handleRegisterUser(name, email, password) {
    setIsLoading(true);
    MainApi.register(name, email, password)
      .then((res) => {
        if (res.email === email) {
          history.push("/signin");
          setErrorMesage("");
          setErrorVision(false);
        }
      })
      .catch((err) => {
        setErrorMesage(err.message);
        setErrorVision(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //Авторизация пользователя
  function handleAuthorizeUser(email, password) {
    setIsLoading(true);
    MainApi.authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          setErrorMesage("");
          setErrorVision(false);
          history.push("/movies");
        }
      })
      .catch((err) => {
        setErrorMesage(err.message);
        setErrorVision(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // Выход из системы
  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("savedMovies");
    setLoggedIn(false);
    history.push("/signin");
  };

  //Получаем данные пользователя
  React.useEffect(() => {
    if (loggedIn === true) {
      MainApi.getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch(() => {
          console.log("Невозможно получить данные пользователя.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [loggedIn]);

  //Обловнялем данные пользователя.
  function handleUpdateUser(name, email) {
    setIsLoading(true);
    MainApi.updateUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
        setErrorMesage("Данные обновлены");
        setErrorVision(true);
      })
      .catch((err) => {
        setErrorMesage(err.message);
        setErrorVision(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //Получаем и выдаём карточки внешнего API
  const getMoviesAll = (word, short) => {
    setIsLoading(true);
    MoviesApi.getMovies()
      .then((movies) => {
        const filteredMovies = filterMovies(movies, word, short);
        setResultMovies("Ничего не найдено");
        setMovies(filteredMovies);
        localStorage.setItem("movies", JSON.stringify(filteredMovies));
      })
      .catch(() => {
        setResultMovies("Ошибка сервера");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //Фильтруем фильмы
  const filterMovies = (movies, word, short) => {
    const filterPattern = new RegExp(word, "gi");
    return movies.filter((movie) => {
      if (short) {
        return movie.duration <= shortFilm && filterPattern.test(movie.nameRU);
      } else {
        return filterPattern.test(movie.nameRU);
      }
    });
  };

  //Делаем запрос на наш API и получаем список фильмов
  React.useEffect(() => {
    setIsLoading(true);
    if (loggedIn) {
      MainApi.getSavedMovies()
        .then((res) => {
          if (res.movie.length === 0) {
            setResultSavedMovies("Нет добавленных фильмов");
          }
          localStorage.setItem("savedMovies", JSON.stringify(res.movie));
          setSavedMovies(res.movie);
          setIsLoading(false);
        })
        .catch((err) => console.log(err.message));
    }
  }, [loggedIn]);

  //Делаем запрос в локальное хранилище и фильтруем фильмы
  const getMoviesSave = (word, short) => {
    const movies = JSON.parse(localStorage.getItem("savedMovies"));
    if (word === "") {
      setSavedMovies(movies);
      if (movies.length === 0) {
        setResultSavedMovies("Нет добавленных фильмов");
      } else {
        setResultSavedMovies("");
      }
    } else {
      const filteredMovies = filterMovies(movies, word, short);
      setResultSavedMovies("Ничего не найдено");
      setSavedMovies(filteredMovies);
    }
  };

  // Функция сохранения карточки
  const handleSaveMovie = (movie) => {
    MainApi.saveMovie(movie)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie.movie]);
        localStorage.setItem(
          "savedMovies",
          JSON.stringify([...savedMovies, movie.movie])
        );
      })
      .catch((err) => console.log(err));
  };
  
  // Функция удаления карточки
  const handleRemoveMovie = (id) => {
    MainApi.removeMovie(id)
      .then(() => setSavedMovies(savedMovies.filter((m) => m._id !== id)))
      .catch((err) => console.log(err.message));
  };

  //Открытие Бургер-меню
  function handleNavigationClick() {
    setIsHandleNavigationClick(true);
  }

  //Закрытие Бургер-меню
  function handleNavigationClose() {
    setIsHandleNavigationClick(false);
  }

  //Закрытие Бургер-меню на ESC
  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        handleNavigationClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  //Закрытие Бургер-меню на пустую область
  React.useEffect(() => {
    const handleClickClose = (event) => {
      if (event.target.classList.contains("navmob__background_oppened")) {
        handleNavigationClose();
      }
    };
    window.addEventListener("mousedown", handleClickClose);

    return () => {
      window.removeEventListener("mousedown", handleClickClose);
    };
  }, []);

  //
  function updateWidth() {
    setWindowWidth(window.innerWidth);
  }

  //Следит за изменение ширены страницы
  React.useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header
          windowWidth={windowWidth}
          isOpen={isHandleNavigationClick}
          onClose={handleNavigationClose}
          NavigationClick={handleNavigationClick}
          loggedIn={loggedIn}
        />
        <Switch>
          <ProtectedRoute exact path="/movies" loggedIn={loggedIn}>
            <Movies
              windowWidth={windowWidth}
              isLoading={isLoading}
              getMoviesAll={getMoviesAll}
              movies={movies}
              resultMovies={resultMovies}
              savedMovies={savedMovies}
              handleSaveMovie={handleSaveMovie}
              handleRemoveMovie={handleRemoveMovie}
            />
          </ProtectedRoute>

          <ProtectedRoute exact path="/saved-movies" loggedIn={loggedIn}>
            <SavedMovies
              windowWidth={windowWidth}
              isLoading={isLoading}
              getMoviesSave={getMoviesSave}
              savedMovies={savedMovies}
              resultMovies={resultSavedMovies}
              handleSaveMovie={handleSaveMovie}
              handleRemoveMovie={handleRemoveMovie}
            />
          </ProtectedRoute>

          <ProtectedRoute exact path="/profile" loggedIn={loggedIn}>
            <Profile
              windowWidth={windowWidth}
              onSignOut={handleSignOut}
              onUpdateUser={handleUpdateUser}
              errorMesage={errorMesage}
              errorVision={errorVision}
              setErrorVision={setErrorVision}
              isLoading={isLoading}
            />
          </ProtectedRoute>

          <Route exact path="/">
            <Main myAge={myAge} />
          </Route>
          <Route exact path="/signup">
            <Register
              onRegisterUser={handleRegisterUser}
              errorMesage={errorMesage}
              errorVision={errorVision}
              isLoading={isLoading}
            />
          </Route>
          <Route exact path="/signin">
            <Login
              onAuthorizeUser={handleAuthorizeUser}
              errorMesage={errorMesage}
              errorVision={errorVision}
              isLoading={isLoading}
            />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Redirect from="*" to="/404" />
        </Switch>
        <Footer year={year} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
