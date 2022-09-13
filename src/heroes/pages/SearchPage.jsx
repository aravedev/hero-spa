import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";
export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //console.log(location);

  const { q = "" } = queryString.parse(location.search);
  //console.log(query);
  const heroes = getHeroesByName(q);
  // Invoking useForm, searchText will belong to the initial state of useForm, check line 28
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const onSearchSubmit = (event) => {
    event.preventDefault();

    if (searchText.trim().length <= 1) return;

    //
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero..."
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Go!</button>
          </form>
        </div>
        <div className="col-7 mt-1">
          <h4>Results</h4>
          <hr />

          <div
            className="alert alert-primary animate__animated animate__tada"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>
          <div
            className="alert alert-danger animate__animated animate__tada"
            style={{ display: showError ? "" : "none" }}
          >
            There is not results <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero}></HeroCard>
          ))}
          {/*<HeroCard></HeroCard> */}
        </div>
      </div>
    </>
  );
};
