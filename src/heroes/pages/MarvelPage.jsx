import React from "react";
import { HeroList } from "../components/HeroList";

export const MarvelPage = () => {
  const publisher = "Marvel Comics";
  return (
    <>
      <h1>Marvel Comic</h1>
      <hr />
      <HeroList publisher={publisher}></HeroList>
    </>
  );
};
