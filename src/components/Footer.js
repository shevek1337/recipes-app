import React from "react";
import fb from "../assets/social-media/fb.svg";
import twitter from "../assets/social-media/twitter.svg";
import ig from "../assets/social-media/ig.svg";
import reddit from "../assets/social-media/reddit.svg";
import youtube from "../assets/social-media/youtube.svg";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="footer-info">
          <h2>Foodorama</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="soc-media-icons">
            <img src={fb} alt="fb"></img>
            <img src={twitter} alt="twitter"></img>
            <img src={ig} alt="ig"></img>
            <img src={reddit} alt="reddit"></img>
            <img src={youtube} alt="youtube"></img>
          </div>
        </div>
        <ul>
          <p>Menu</p>
          <li>Shop</li>
          <li>Blog</li>
          <li>Recipes</li>
          <li>Contact</li>
        </ul>
        <ul>
          <p>Other Links</p>
          <li>Privacy Policy</li>
          <li>User Agreement</li>
          <li>Update Consent</li>
          <li>Provide Feedback</li>
        </ul>
        <ul className="hide-sm">
          <p>Other Links</p>
          <li>Privacy Policy</li>
          <li>User Agreement</li>
          <li>Update Consent</li>
          <li>Provide Feedback</li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
