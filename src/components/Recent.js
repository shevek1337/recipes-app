import React from "react";
import { useHistory } from "react-router-dom";

const Recent = ({ star, clock, data }) => {
  const history = useHistory();
  const recentRecipes = data.slice(-6).sort(function (a, b) {
    return b.id - a.id;
  });
  return (
    <>
      <div className="container">
        <h2 className="heading">Recent Recipes</h2>
        <div className="recipes">
          {recentRecipes.map((recipe) => {
            return (
              <div
                className="recipe-card"
                key={recipe.id}
                onClick={() => {
                  history.push(`/recipe/${recipe.id}`);
                  window.scrollTo(0, 0);
                }}
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
    </>
  );
};

export default Recent;
