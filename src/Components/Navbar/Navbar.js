import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { ProductList } from "../../Helpers/ProductList/ProductList";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchBar from "../SearchBar/SearchBar";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import UserNavigation from "./UserNavigation/UserNavigation";
import UserAuthService from "../../Services/UserAuthService";

export const Navbar = ({ onInputSearchChange }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (searchTerm) => {
    setInputValue(searchTerm);
    console.log("Search:", searchTerm);
  };

  const handleSearchIconClick = () => {
    navigate("/search-results");
  };

  const handleUploadPrescription = () => {
    navigate("/prescriptionupload");
  };

  const handleLoginLogout = () => {
    const loggedIn = UserAuthService.isLoggedIn();
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      // Perform logout action
      UserAuthService.clear();
      setIsLoggedIn(false); // Update the isLoggedIn state to reflect the logout
      navigate("/");
    } else if (!loggedIn) {
      // Perform login action
      console.log("check true", loggedIn);
      setIsLoggedIn(true); // Update the isLoggedIn state to reflect the login
      navigate("/login");
    }
  };

  const suggestDropDown = () => {
    return ProductList.filter((productItem) => {
      const searchTerm = inputValue.toLowerCase();
      const name = productItem.name.toLowerCase();
      return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
    }).map((productItem, key) => (
      <div
        key={productItem.id}
        className="Navbar__dropdown__row"
        onClick={() => handleSearch(productItem.name)}
      >
        {productItem.name}
      </div>
    ));
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
            onInputChange={handleInputChange}
            value={inputValue}
            onSearchIconClick={handleSearchIconClick}
            suggestDropDown={suggestDropDown}
            onChange={onInputSearchChange}
          />
        </div>
        <div onClick={handleUploadPrescription}>
          <PrimaryButton
            icon={<TextSnippetIcon />}
            btnContent={"UPLOAD PRESCRIPTION"}
          />
        </div>
        <div className="Navbar__user__details">
          <div>
            {isLoggedIn ? (
              <UserNavigation
                userIcon={<AccountCircleIcon />}
                userText={"LOGOUT"}
                onClickFunc={handleLoginLogout}
              />
            ) : (
              <UserNavigation
                userIcon={<AccountCircleIcon />}
                userText={"LOGIN"}
                onClickFunc={handleLoginLogout}
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
