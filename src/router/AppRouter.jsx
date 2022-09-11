import { Route, Routes } from "react-router-dom";
import { LoginPages } from "../auth";
import { HeroesRoutes } from "../heroes";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPages></LoginPages>}></Route>
        <Route path="/*" element={<HeroesRoutes></HeroesRoutes>}></Route>
      </Routes>
    </>
  );
};