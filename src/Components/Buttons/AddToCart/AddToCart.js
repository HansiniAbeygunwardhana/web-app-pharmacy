import React from "react";
import "./Button.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const AddToCart = () => {
  return (
    <div className="button">
      <div className="Add_to_cart_button__icon">
        <ShoppingCartIcon />
      </div>
      <div className="Add_to_cart_button__text">ADD TO CART</div>
    </div>
  );
};

export default AddToCart;
