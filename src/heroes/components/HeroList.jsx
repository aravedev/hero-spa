import React from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  //console.log(dcHero);
  return (
    <ul>
      {heroes.map((heroe) => (
        <li key={heroe.id}>{heroe.superhero}</li>
      ))}
    </ul>
  );
};
