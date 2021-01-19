import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { data } from "../data";

// კატეგორიების მასივი რომელიც შედგება უნიკალური სახელებისგან
const categoryNames = [...new Set(data.map((recipe) => recipe.category.name))];
const categoryImages = [
  ...new Set(data.map((recipe) => recipe.category.image)),
];

const Categories = () => {
  const history = useHistory();

  // number ცვლადი გამოვიყენე ტელეფონზე მაქსიმუმ 3, ხოლო დიდ ეკრანზე 9 კატეგორიის ჩასატვირთად.
  // დამჭირდა რადგან MORE და LESS ღილაკებზე დაჭერის შემდეგ უნდა დაბუბრუნდეს საწყის მნიშვნელობას.
  const [number, setNumber] = useState(9);

  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    // window resize ცვლილებაზე size ცვლადის განახლება
    window.addEventListener("resize", checkSize);
    if (size < 576) {
      setNumber(6);
      setCategoriesToDisplay(number);
    } else {
      setNumber(9);
      setCategoriesToDisplay(number);
    }
    return () => {
      // cleanup
      window.removeEventListener("resize", checkSize);
    };
  }, [number, size]);

  const [categoriesToDisplay, setCategoriesToDisplay] = useState(number);
  const [categories] = useState(categoryNames);
  const [more, less] = useState("More");
  return (
    <div className="container">
      <h2 className="heading">Recipe Categories</h2>
      <div className="categories">
        {categories.slice(0, categoriesToDisplay).map((category, index) => {
          return (
            <div
              className="category-card"
              key={index}
              onClick={() => {
                history.push(`/category/${category}`);
                window.scrollTo(0, 0);
              }}
            >
              <img src={categoryImages[index]} alt={category}></img>
              {category}
            </div>
          );
        })}
        {more === "More" && (
          <span
            className="more-less"
            onClick={() => {
              setCategoriesToDisplay(data.length);
              less("Less");
            }}
          >
            {more}
          </span>
        )}
        {more === "Less" && (
          <span
            className="more-less"
            onClick={() => {
              setCategoriesToDisplay(number);
              less("More");
            }}
          >
            {more}
          </span>
        )}
      </div>
    </div>
  );
};

export default Categories;
