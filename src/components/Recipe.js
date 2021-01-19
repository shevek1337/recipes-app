import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { data } from "../data";
import star from "../assets/star.svg";
import clock from "../assets/clock.svg";

const Recipe = () => {
  const { id } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState("Recipe Title");
  const [image, setImage] = useState("Default Image");
  const [ratingScore, setRatingScore] = useState("Default Rating Score");
  const [ratingVotes, setRatingVotes] = useState("Default Rating Votes");
  const [time, setTime] = useState("Default Time Needed");
  const [category, setCategory] = useState("Default Category");

  useEffect(() => {
    const newRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setTitle(newRecipe.title);
    setImage(newRecipe.image);
    setRatingScore(newRecipe.rating.score);
    setRatingVotes(newRecipe.rating.votes);
    setTime(newRecipe.time);
    setCategory(newRecipe.category.name);
  }, [id]);
  return (
    <div className="container">
      <div className="recipe">
        <div className="info">
          <img src={image} className="recipe-img" alt={title} />
          <div>
            <h2>{title}</h2>
            <div className="rating">
              <p>Rating: </p>
              <img className="star" src={star} alt="rating"></img>
              <p>
                {ratingScore}({ratingVotes})
              </p>
            </div>
            <div className="time">
              <p>Time:</p>
              <img className="clock" src={clock} alt="preparation time"></img>
              <p>{time} hr.</p>
            </div>
            <div className="category">
              <p>Category:</p>
              <button
                onClick={() => {
                  history.push(`/category/${category}`);
                  window.scrollTo(0, 0);
                }}
              >
                {category}
              </button>
            </div>
          </div>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
          <p>
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
