import React from "react";
import heroImage from "../assets/heroimage.svg";
import heroImageMobile from "../assets/heroimage_mobile.svg";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="hero">
          <div className="text">
            <h1>Tasty Recipes</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
            <button>
              Learn More <span className="icon"></span>
            </button>
          </div>
          <img src={heroImage} className="hero-image" alt="hero" />
          <img
            src={heroImageMobile}
            className="hero-image-mobile"
            alt="hero mobile"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
