import React from "react";
import { Link } from "react-router-dom";

function Account(props) {
  const {
    onClose,
  } = props
  return (
    <div className="account__block">
      <p className="account__email">Акакунт</p>

      <Link to="/profile">
        <button className="account__button" onClick={onClose}/>
      </Link>
    </div>
  );
}

export default Account;
