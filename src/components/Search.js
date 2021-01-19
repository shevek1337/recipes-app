import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { data } from "../data";
import star from "../assets/star.svg";
import clock from "../assets/clock.svg";

const Search = () => {
  const { query } = useParams();
  const history = useHistory();

  const results = data.filter((recipe) => {
    return recipe.title.toLowerCase().match(query.toLowerCase());
  });
  return (
    <div className="container">
      <div className="search-results">
        <h2>Search Results for: "{query}"</h2>
        <div className="recipes">
          {results.map((recipe) => {
            return (
              <div
                className="recipe-card"
                key={recipe.id}
                onClick={() => history.push(`/recipe/${recipe.id}`)}
              >
                <img
                  className="recipe-image"
                  src={recipe.image}
                  alt={recipe.title}
                ></img>
                <h4>{recipe.title}</h4>
                <div className="recipe-info">
                  <div className="rating">
                    <img className="star" src={star} alt="rating"></img>
                    <p>
                      {recipe.rating.score}({recipe.rating.votes})
                    </p>
                  </div>
                  <div className="time">
                    <img
                      className="clock"
                      src={clock}
                      alt="preparation time"
                    ></img>
                    <p>{recipe.time} hr.</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
