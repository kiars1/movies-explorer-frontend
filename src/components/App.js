import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Login from "./Login.js";
import Register from "./Register.js";
import NotFound from "./NotFound";


function App() {
  return (
    <div className="root">
      <Header />
      <Main />
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/404">
        <NotFound />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
