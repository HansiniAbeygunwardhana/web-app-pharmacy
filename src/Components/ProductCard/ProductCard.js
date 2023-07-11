import React from "react";
import "./ProductCard.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddToCart from "../Buttons/AddToCart/AddToCart";
import { Add } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import { ProductList } from "../../Helpers/ProductList/ProductList";

const ProductCard = ({
  image,
  name,
  rating,
  price,
  isAvailable,
  isPrescriptionMed,
  onClick,
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
            <div>
              <AddToCart />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
