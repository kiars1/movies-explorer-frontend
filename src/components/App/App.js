import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  const [isHandleNavigationClick, setIsHandleNavigationClick] =
    React.useState(false);

  function handleNavigationClick() {
    setIsHandleNavigationClick(true);
  }

  function handleNavigationClose() {
    setIsHandleNavigationClick(false);
  }

  return (
    <div className="app">
      <Header isOpen={isHandleNavigationClick} onClose={handleNavigationClose} NavigationClick={handleNavigationClick}/>
      <Switch>
        <Route exact path="/movies">
          <Movies />
        </Route>

        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
