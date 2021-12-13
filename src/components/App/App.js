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
  const [savedMoviesAll, setSavedMoviesAll] = React.useState([]);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [errorMesage, setErrorMesage] = React.useState("");
  const [errorVision, setErrorVision] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [resultMovies, setResultMovies] = React.useState("");
  const [resultSavedMovies, setResultSavedMovies] = React.useState("");
  const [blockInput, setBlockInput] = React.useState(false);

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

  //Получаем данные пользователя
  React.useEffect(() => {
    if (loggedIn === true) {
      MainApi.getUserInfo()
        .then((res) => {
          setCurrentUser(res);
          localStorage.setItem("user", res._id);
        })
        .catch(() => {
          console.log("Невозможно получить данные пользователя.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [loggedIn]);

  //Регистрация пользователя
  function handleRegisterUser(name, email, password) {
    setBlockInput(true);
    setIsLoading(true);
    MainApi.register(name, email, password)
      .then((res) => {
        if (res.email === email) {
          setErrorMesage("");
          setErrorVision(false);
          handleAuthorizeUser(email, password);
        }
      })
      .catch((err) => {
        setErrorMesage(err.message);
        setErrorVision(true);
      })
      .finally(() => {
        setBlockInput(false);
        setIsLoading(false);
      });
  }

  //Авторизация пользователя
  function handleAuthorizeUser(email, password) {
    setBlockInput(true);
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
        setBlockInput(false);
        setIsLoading(false);
      });
  }

  // Выход из системы
  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("savedMovies");
    localStorage.removeItem("user");
    localStorage.removeItem("wordSM");
    localStorage.removeItem("wordM");
    localStorage.removeItem("shortSM");
    localStorage.removeItem("shortSM");
    history.push("/");
    history.go();
  };

  //Обловнялем данные пользователя.
  function handleUpdateUser(name, email) {
    setBlockInput(true);
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
        setBlockInput(false);
      });
  }

  //Получаем и выдаём карточки внешнего API
  React.useEffect(() => {
    setIsLoading(true);
    if (loggedIn) {
      MoviesApi.getMovies()
        .then((movies) => {
          localStorage.setItem("movies", JSON.stringify(movies));
          setMovies(movies);
          downloadSearchCashe();
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [loggedIn]);

  //Делаем запрос в локальное хранилище и фильтруем фильмы
  const getMoviesAll = (word, short) => {
    setBlockInput(true);
    const movies = JSON.parse(localStorage.getItem("movies"));
    if (word === "") {
      setMovies(movies);
    }
    if (short === "") {
      setMovies(movies);
      if (movies.length === 0) {
        setResultMovies("Нет добавленных фильмов");
      } else {
        setResultMovies("");
      }
    } else {
      const filteredMovies = filterMovies(movies, word, short);
      setResultMovies("Ничего не найдено");
      setMovies(filteredMovies);
    }
    setTimeout(setBlockInput, [400], false);
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
          const Owner = localStorage.getItem("user");
          const savedMoviesOwner = res.movie.filter(function (movie) {
            return movie.owner === Owner;
          });

          if (savedMoviesOwner.length === 0) {
            setResultSavedMovies("Нет добавленных фильмов");
          }
          localStorage.setItem("savedMovies", JSON.stringify(savedMoviesOwner));
          setSavedMovies(savedMoviesOwner);
          setSavedMoviesAll(savedMoviesOwner)
          setIsLoading(false);
          downloadSearchCashe();
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [loggedIn, currentUser]);

  //Делаем запрос в локальное хранилище и фильтруем фильмы
  const getMoviesSave = (word, short) => {
    setBlockInput(true);
    const movies = JSON.parse(localStorage.getItem("savedMovies"));
    if (word === "") {
      setSavedMovies(movies);
      if (movies.length === 0) {
        setResultSavedMovies("Нет добавленных фильмов");
      } else {
        setResultSavedMovies("");
      }
    }
    if (short === "") {
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
    setTimeout(setBlockInput, [400], false);
  };

  function downloadSearchCashe() {
    if (localStorage.getItem("wordM") != null) {
    getMoviesAll(localStorage.getItem("wordM"),  JSON.parse(localStorage.getItem("shortM")))
    if (localStorage.getItem("wordSM") != null) {
      getMoviesSave(localStorage.getItem("wordSM"),  JSON.parse(localStorage.getItem("shortSM")));
    }
  }
  }

  // Функция сохранения карточки
  const handleSaveMovie = (movie) => {
    MainApi.saveMovie(movie)
      .then((movie) => {
        setSavedMovies([...savedMoviesAll, movie.movie]);
        setSavedMoviesAll([...savedMoviesAll, movie.movie]);
        localStorage.setItem(
          "savedMovies",
          JSON.stringify([...savedMoviesAll, movie.movie])
        );
      })
      .catch((err) => {
        console.log(err);
        alert(
          `Невозможно сохранить фильм по причине: "${err.validation.body.message}"`
        );
      });
  };

  // Функция удаления карточки
  const handleRemoveMovie = (id) => {
    MainApi.removeMovie(id)
      .then(() => {
        setSavedMovies(savedMovies.filter((m) => m._id !== id));
        setSavedMoviesAll(savedMoviesAll.filter((m) => m._id !== id))
        localStorage.setItem(
          "savedMovies",
          JSON.stringify(savedMovies.filter((m) => m._id !== id))
        );
      })

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

  //Функция обновления разрешения экрана
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

  //Да это костыль чтобы убрать сообщение об ошибке
  function handleRouteChange() {
    setErrorVision(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header
          windowWidth={windowWidth}
          isOpen={isHandleNavigationClick}
          onClose={handleNavigationClose}
          NavigationClick={handleNavigationClick}
          loggedIn={loggedIn}
          onRouteChange={handleRouteChange}
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
              blockInput={blockInput}
              savedMoviesAll={savedMoviesAll}
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
              blockInput={blockInput}
              savedMoviesAll={savedMoviesAll}
            />
          </ProtectedRoute>

          <ProtectedRoute exact path="/profile" loggedIn={loggedIn}>
            <Profile
              windowWidth={windowWidth}
              onSignOut={handleSignOut}
              onUpdateUser={handleUpdateUser}
              errorMesage={errorMesage}
              errorVision={errorVision}
              isLoading={isLoading}
              blockInput={blockInput}
            />
          </ProtectedRoute>

          <Route exact path="/">
            <Main myAge={myAge} />
          </Route>
          <Route exact path="/signup">
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signup" />}
            <Register
              onRegisterUser={handleRegisterUser}
              errorMesage={errorMesage}
              errorVision={errorVision}
              isLoading={isLoading}
              onRouteChange={handleRouteChange}
              blockInput={blockInput}
            />
          </Route>
          <Route exact path="/signin">
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
            <Login
              onAuthorizeUser={handleAuthorizeUser}
              errorMesage={errorMesage}
              errorVision={errorVision}
              isLoading={isLoading}
              onRouteChange={handleRouteChange}
              blockInput={blockInput}
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
