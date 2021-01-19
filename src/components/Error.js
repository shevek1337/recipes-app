import React from "react";
import { useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();
  return (
    <div className="container">
      <div className="error">
        <h1>404</h1>
        <h2>Oops! Page not Found...</h2>
        <button onClick={() => history.push("/")}>Back to Home</button>
      </div>
    </div>
  );
};

export default Error;
