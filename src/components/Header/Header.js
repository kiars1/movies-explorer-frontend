import React from "react";
import { Route, useHistory } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import headerLogo from "../../images/Logo_1.svg";

function Header(props) {
  const {
    isOpen,
    onClose,
    NavigationClick,
    windowWidth,
    loggedIn,
  } = props

  const history = useHistory();

  const backToMain = () => {
    history.push('./')
  };

  return (
    
    <>
      <Route exact path="/">
        <header className="header header__landing">
            <img src={headerLogo} className="header__logo" alt="Проект Муви" onClick={backToMain}/>
          <Navigation loggedIn={loggedIn} isOpen={isOpen} onClose={onClose} NavigationClick={NavigationClick} windowWidth={windowWidth}/>
        </header>
      </Route>

      <Route path={["/movies", "/saved-movies", "/profile"]}>
        <header className="header">
            <img src={headerLogo} className="header__logo" alt="Проект Муви" onClick={backToMain}/>
          <Navigation loggedIn={loggedIn} isOpen={isOpen} onClose={onClose} NavigationClick={NavigationClick} windowWidth={windowWidth}/>
        </header>
      </Route>
    </>
  );
}

export default Header;
