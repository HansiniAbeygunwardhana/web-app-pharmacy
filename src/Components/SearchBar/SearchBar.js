import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductList } from "../../Helpers/ProductList/ProductList";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.scss";

export const SearchBar = ({
  onInputChange,
  value,
  onSearchIconClick,
  suggestDropDown,
}) => {
  // let navigate = useNavigate();
  // const [value, setValue] = useState("");
  // const onInputChange = (event) => {
  //   setValue(event.target.value);
  // };
  // const onSearch = (searchTerm) => {
  //   // TO DO : need API to fetch the search results
  //   setValue(searchTerm);
  //   console.log("search", searchTerm);
  // };
  return (
    <div className="Navbar__searchbar">
      <div className="Navbar__search">
        <input
          className="Navbar__search__text"
          type="text"
          placeholder="Search entire pharmacy..."
          value={value}
          onChange={onInputChange}
        />
        <div
          className="Navbar__search__icon"
          onClick={
            onSearchIconClick
            // the state object allows to store and manage component-specific data
            // navigate("/search-results");
          }
        >
          <SearchIcon />
        </div>
      </div>
      <div className="Navbar__dropdown">
        {suggestDropDown()}
        {/* {ProductList.filter((productItems) => {
          const searchTerm = value.toLowerCase();
          const name = productItems.name.toLowerCase();

          return (
            searchTerm && name.startsWith(searchTerm) && name !== searchTerm
          );
        }).map((productItems, key) => (
          <div
            // onClick={() => onSearch(productItems.name)}
            onClick={onSearch}
            className="Navbar__dropdown__row"
            key={productItems.id}
          >
            {productItems.name}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default SearchBar;
