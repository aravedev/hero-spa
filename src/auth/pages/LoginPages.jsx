import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContex";

export const LoginPages = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    navigate("lastPath", { replace: true });
    login("Danny Rave");
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
