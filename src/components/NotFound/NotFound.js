import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
      <main className="not-found">
        <h1 className="not-found__heading">404</h1>
        <p className="not-found__information">Страница не найдена</p>
        <Link to="/" className="not-found__link">Назад</Link>
      </main>
    );
  }

  export default NotFound;