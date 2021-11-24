import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";
import Promo from "./Promo";
import AboutProject from "./AboutProject";
import Techs from "./Techs";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

function Main() {
  return (
    <main className="main">
      <Route path="/main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>
    </main>
  );
}

export default Main;
