import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import { ProductList } from "../../Helpers/ProductList/ProductList";
import { useNavigate } from "react-router-dom";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchBar from "../SearchBar/SearchBar";

export const Navbar = ({ onInputSearchChange }) => {
  let navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const onInputRecieved = (event) => {
    setInputValue(event.target.value);
    console.log("inputed", inputValue);
  };
  const onSearch = (searchTerm) => {
    // TO DO : need API to fetch the search results
    setInputValue(searchTerm);
    console.log("search", searchTerm);
  };
  const onSearchIconClick = () => {
    navigate("/search-results");
  };
  const suggestDropDown = () => {
    {
      return ProductList.filter((productItems) => {
        const searchTerm = inputValue.toString().toLowerCase();
        const name = productItems.name.toString().toLowerCase();

        return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
      }).map((productItems, key) => (
        <div
          onClick={() => onSearch(productItems.name)}
          className="Navbar__dropdown__row"
          key={productItems.id}
        >
          {productItems.name}
        </div>
      ));
    }
  };

  return (
    <>
      <nav className="Navbar">
        <div
          className="Navbar__logo"
          onClick={() => {
            navigate("/");
          }}
        >
          SHAN PHARMACY
        </div>
        <div>
          <SearchBar
            onInputChange={onInputRecieved}
            value={inputValue}
            onSearchIconClick={onSearchIconClick}
            suggestDropDown={suggestDropDown}
            onChange={onInputSearchChange}
          />
        </div>
        <button
          className="Navbar__upload__button"
          onClick={() => {
            navigate("/prescriptionupload");
          }}
        >
          <div className="Navbar__upload__button__text">
            UPLOAD YOUR PRESCRIPTION
          </div>
          <div className="Navbar__upload__button__icon">
            <TextSnippetIcon />
          </div>
        </button>
        <div className="Navbar__user__details">
          <div
            className="Navbar__user__details__user"
            onClick={() => {
              navigate("/profile");
            }}
          >
            <div className="Navbar__user__details__user__icon">
              <AccountCircleIcon />
            </div>
            <div className="Navbar__user__details__user__text">UserName</div>
          </div>
          <div
            className="Navbar__user__details__cart"
            onClick={() => {
              navigate("/cart");
            }}
          >
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
