import React from "react";
import "./SubNavbar.scss";
import { useNavigate } from "react-router-dom";

export const SubNavbar = () => {
  const navigate = useNavigate("");
  return (
    <div className="SubNavbar">
      <div
        className="SubNavbar__list"
        onClick={() => {
          navigate("/product");
        }}
      >
        VIEW PRODUCTS
      </div>
      <div
        className="SubNavbar__list"
        onClick={() => {
          navigate("/cart");
        }}
      >
        VIEW CART
      </div>
      <div
        className="SubNavbar__list"
        onClick={() => {
          navigate("/profile");
        }}
      >
        VIEW PROFILE
      </div>
    </div>
  );
};

export default SubNavbar;
