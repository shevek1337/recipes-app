import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../assets/logo.svg";
import burger from "../assets/burger.svg";
import close from "../assets/close.svg";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const history = useHistory();
  // check ცვლადი გამოვიყენე, ლინკზე კლიკის შემდეგ მობილურზე გახსნილი ნავბარის დასახურად და burge/close იკონკების toggle-სთვის
  const [check, setCheck] = useState(true);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <img
            src={logo}
            className="logo"
            alt="logo"
            onClick={() => {
              history.push("/");
              window.scrollTo(0, 0);
            }}
          />
          <label className="checkbtn" htmlFor="check">
            {check ? (
              <img src={burger} alt="menu" className="burger" />
            ) : (
              <img src={close} alt="close menu" className="burger" />
            )}
          </label>
          <input
            name="check"
            type="checkbox"
            id="check"
            className="check"
            onChange={() => setCheck(!check)}
          />
          <ul className={check ? "nav-links hide" : "nav-links show"}>
            <li>
              <NavLink
                activeClassName="active"
                exact
                to="/"
                onClick={() => {
                  setCheck(!check);
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                to="/shop"
                onClick={() => {
                  setCheck(!check);
                  window.scrollTo(0, 0);
                }}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                to="/recipes"
                onClick={() => {
                  setCheck(!check);
                  window.scrollTo(0, 0);
                }}
              >
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                to="/contact"
                onClick={() => {
                  setCheck(!check);
                  window.scrollTo(0, 0);
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="hide-sm">
            <SearchInput />
          </div>
          <div className="navbar-buttons">
            <button className="login">Log in</button>
            <button className="register">Sign Up</button>
          </div>
        </div>
      </nav>
      <div className="mobile-search">
        <SearchInput />
      </div>
    </>
  );
};

export default Navbar;
