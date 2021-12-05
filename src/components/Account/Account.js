import React from "react";

function Account(props) {
  const { onClose } = props;
  return (
    <div className="account__block" onClick={onClose}>
      <p className="account__email">Акакунт</p>
      <button className="account__button" />
    </div>
  );
}

export default Account;
