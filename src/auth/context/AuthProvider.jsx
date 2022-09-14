import React, { useReducer } from "react";
import { AuthContext } from "./AuthContex";
import { authReducer } from "./AuthReducer";
import { types } from "./types/types";

//

const initialState = {
  logged: false,
};

// because we are passing init, it is in charge to create the initial state. esto es redundante, but
// this way I cant understand better
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user, // if the user exist then logged: true, if not logged:return false
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  //
  const login = (name = "") => {
    const user = {
      id: "ABCD",
      name: name,
    };

    const action = {
      type: types.login,
      payload: user,
    };

    // creating a new entry in the local storage
    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  //

  const logout = () => {
    localStorage.removeItem("user");
    const action = {
      type: types.logout,
    };
    dispatch(action);
  };
  return (
    <AuthContext.Provider
      value={{ ...authState, login: login, logout: logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
