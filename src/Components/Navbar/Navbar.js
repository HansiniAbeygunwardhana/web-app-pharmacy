import React from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
        <div className="Navbar__logo">SHAN PHARMACY</div>

        <div className="Navbar__search">
          <input
            className="Navbar__search__text"
            type="text"
            placeholder="Search entire pharmacy..."
          />
          <div className="Navbar__search__icon">
            <SearchIcon />
          </div>
        </div>
        <button className="Navbar__upload__button">
          <div className="Navbar__upload__button__text">
            UPLOAD YOUR PRESCRIPTION
          </div>
          <div className="Navbar__upload__button__icon">
            <TextSnippetIcon />
          </div>
        </button>
        <div className="Navbar__user__details">
          <div className="Navbar__user__details__user">
            <div className="Navbar__user__details__user__icon">
              <AccountCircleIcon />
            </div>
            <div className="Navbar__user__details__user__text">UserName</div>
          </div>
          <div className="Navbar__user__details__cart">
            <div className="Navbar__user__details__cart__icon">
              <ShoppingCartIcon />
            </div>
            <div className="Navbar__user__details__cart__text">0</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
