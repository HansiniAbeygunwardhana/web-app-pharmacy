import React from "react";
import "./AddToCart.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const AddToCart = () => {
  return (
    <div className="Add_to_cart_button">
      <div className="Add_to_cart_button__icon">
        <ShoppingCartIcon />
      </div>
      <div className="Add_to_cart_button__text">ADD TO CART</div>
    </div>
  );
};

export default AddToCart;
