import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { ProductList } from "../../Helpers/ProductList/ProductList";
import SearchIcon from "@mui/icons-material/Search";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

export const Navbar = () => {
  let navigate = useNavigate();
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    // TO DO : need API to fetch the search results
    setValue(searchTerm);
    console.log("search", searchTerm);
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

        <div className="Navbar__searchbar">
          <div className="Navbar__search">
            <input
              className="Navbar__search__text"
              type="text"
              placeholder="Search entire pharmacy..."
              value={value}
              onChange={onChange}
            />
            <div
              className="Navbar__search__icon"
              onClick={() => {
                // the state object allows to store and manage component-specific data
                navigate("/search-results");
              }}
            >
              <SearchIcon />
            </div>
          </div>
          <div className="Navbar__dropdown">
            {ProductList.filter((productItems) => {
              const searchTerm = value.toLowerCase();
              const name = productItems.name.toLowerCase();

              return (
                searchTerm && name.startsWith(searchTerm) && name !== searchTerm
              );
            })
              .slice(0, 9)
              .map((productItems, key) => (
                <div
                  onClick={() => onSearch(productItems.name)}
                  className="Navbar__dropdown__row"
                  key={productItems.id}
                >
                  {productItems.name}
                </div>
              ))}
          </div>
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
