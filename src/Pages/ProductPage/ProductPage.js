import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import { ProductList } from "../../Helpers/ProductList/ProductList";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductPage.scss";
import Sort from "../../Components/Sort/Sort";
// import AddToCart from "../../Components/Buttons/AddToCart/AddToCart";

export const ProductPage = () => {
  return (
    <div className="ProductPage">
      <Navbar />
      <SubNavbar />
      <Sort />
      <div className="ProductList">
        {ProductList.map((productItems, key) => {
          return (
            <ProductCard
              key={productItems.id}
              image={productItems.image}
              name={productItems.name}
              rating={productItems.rating}
              price={productItems.price}
              isAvailable={productItems.isAvailable}
              isPrescriptionMed={productItems.isPrescriptionMed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
