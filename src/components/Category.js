/* eslint-disable */
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { data } from "../data";
import star from "../assets/star.svg";
import clock from "../assets/clock.svg";

const Category = () => {
  const { name } = useParams();
  const history = useHistory();

  const relatedCategory = data.filter(
    (recipe) => recipe.category.name === name
  );

  //   სორტირებისთვის: ახალი და პოპულარული, შევმქენი 2 არაი სადაც შესაბამისი სორტირებით დავამატე ითემები.
  const recentRecipes = [];
  recentRecipes.push.apply(
    recentRecipes,
    relatedCategory.sort(function (a, b) {
      return b.id - a.id;
    })
  );
  const popularRecipes = [];
  popularRecipes.push.apply(
    popularRecipes,
    relatedCategory.sort(function (a, b) {
      return b.rating.votes - a.rating.votes;
    })
  );

  // ლისტინგის პირველი ჩატვირთვის დროს, default value იქნება ახალი რეცეპტები, შემდეგ onClick-ით შეიცვლება არაი (recent,popular)
  const [sorting, setSorting] = useState(recentRecipes);

  return (
    <div className="container">
      <div className="category-listing">
        <div className="header">
          <h1>{relatedCategory[0].category.name}</h1>
          <div className="links">
            <p>Sort: </p>
            <button onClick={() => setSorting(recentRecipes)}>New</button>
            <button onClick={() => setSorting(popularRecipes)}>Popular</button>
          </div>
        </div>
        <div className="recipes">
          {sorting.map((recipe) => {
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

export default Category;
