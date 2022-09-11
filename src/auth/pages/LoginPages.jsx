import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPages = () => {
  const login = useNavigate();

  const onLogin = () => {
    login("marvel", { replace: true });
  };

  return (
    <>
      <div className="container">
        <h1>LoginPages</h1>
        <hr />
        <button className="btn btn-primary" onClick={onLogin}>
          LogIn
        </button>
      </div>
    </>
  );
};
