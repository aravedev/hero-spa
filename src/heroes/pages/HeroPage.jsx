import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  // const params = useParams();

  // destructuring the above const
  const { heroId } = useParams();
  //console.log(heroId);
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  const navigate = useNavigate();

  const onNavigateBack = () => {
    //checking the publisher to redirect its respective webpage
    return hero.publisher === "DC Comics"
      ? navigate("/dc")
      : navigate("/marvel");
  };

  return (
    <div className="row mt-5">
      <div className="col-4 ">
        <img
          src={`/assets/${hero.id}.jpg`}
          alt={`${hero.superhero}`}
          className="img-thumbnail animate__animated animate__fadeIn "
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li>
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li>
            <b>First appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-primary" onClick={onNavigateBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};
