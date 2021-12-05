import React from "react";
import { Link, useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();
    return (
      <main className="not-found">
        <h1 className="not-found__heading">404</h1>
        <p className="not-found__information">Страница не найдена</p>
        <Link onClick={() => {history.goBack();}} className="not-found__link">Назад</Link>
      </main>
    );
  }

  export default NotFound;