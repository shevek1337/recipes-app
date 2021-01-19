import React from "react";

const Newsletter = () => {
  return (
    <div className="container">
      <div className="newsletter">
        <span className="badge">NEWSLETTER</span>
        <p>Easy recipes and cooking hacks right to your inbox.</p>
        <form>
          <input type="text" placeholder="Your email adress" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
