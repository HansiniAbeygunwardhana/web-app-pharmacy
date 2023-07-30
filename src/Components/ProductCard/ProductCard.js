import React from "react";
import { useState } from "react";
import "./ProductCard.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddToCart from "../Buttons/AddToCart/AddToCart";
import { Add } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import { ProductList } from "../../Helpers/ProductList/ProductList";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartService from "../../Services/CartService";

const ProductCard = ({
  image,
  name,
  rating,
  price,
  isAvailable,
  isPrescriptionMed,
  onClick,
  onBtnClick,
  onIconClick,
  isInCart,
}) => {
  return (
    <div className="Product_card" onClick={onClick}>
      <img className="Product_card__image" src={image}></img>
      <div className="Product_card__details">
        <h5 className="Product_card__title">{name}</h5>
        <p className="Product_card__rating">
          {[...Array(rating)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </p>
        <p className="Product_card__price">LKR{price}</p>
        <div className="Product_card__status">
          {isAvailable ? (
            <p className="Product_card__status__available">AVAILABLE</p>
          ) : (
            <p className="Product_card__status__notavailable">OUT OF STOCK</p>
          )}
        </div>
        <div className="Product__card__button">
          {isAvailable && !isPrescriptionMed && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <PrimaryButton
                btnContent={"BUY NOW"}
                icon={<LocalMallIcon />}
                btnFunc={onBtnClick}
              />
              <div className="shopping_cart" onClick={onIconClick}>
                {isInCart ? (
                  <ShoppingCartIcon style={{ fontSize: "24px" }} />
                ) : (
                  <ShoppingCartOutlinedIcon />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
