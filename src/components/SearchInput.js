import React, { useState } from "react";
import { data } from "../data";
import { useHistory } from "react-router-dom";

const SearchInput = () => {
  const history = useHistory();
  let recipes = [];
  const [input, setInput] = useState("");

  const _handleEnter = (e) => {
    // Enter ღილაკზე სერჩის დაწყება
    if (e.key === "Enter") {
      history.push(`/search/${input}`);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  if (input.length > 1) {
    recipes = data.filter((recipe) => {
      return recipe.title.toLowerCase().match(input.toLowerCase());
    });
  }
  return (
    <div className="search-div">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        onChange={handleChange}
        value={input}
        onKeyDown={_handleEnter}
      />
      <div className="search-result">
        {recipes
          .map((recipe) => {
            return (
              <div
                className="search-result-recipe"
                key={recipe.id}
                onClick={() => {
                  history.push(`/recipe/${recipe.id}`);
                }}
              >
                <img src={recipe.image} alt={recipe.title} />
                {recipe.title}
              </div>
            );
          })
          .slice(0, 2)}
        {input.length <= 1 && <p>Search for something...</p>}
        {input.length > 1 && recipes.length > 0 && (
          <div className="see-all">
            <button onClick={() => history.push(`/search/${input}`)}>
              See all results
            </button>
          </div>
        )}
        {input.length > 1 && recipes.length === 0 && <p>No Results Found.</p>}
      </div>
    </div>
  );
};

export default SearchInput;
