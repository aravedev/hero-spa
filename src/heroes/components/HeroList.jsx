import React from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  //console.log(dcHero);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((heroe) => (
        <HeroCard key={heroe.id} {...heroe}></HeroCard>
      ))}
    </div>
  );
};

//

//<li key={heroe.id}>{heroe.superhero}</li>
