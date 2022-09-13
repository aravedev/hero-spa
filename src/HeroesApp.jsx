import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AppRouter></AppRouter>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};
