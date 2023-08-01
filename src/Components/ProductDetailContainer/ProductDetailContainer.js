import React from "react";
import "./ProductDetailContainer.scss";
import prescription_only from "../Assets/prescription_only.png";

const ProductDetailContainer = () => {
  return (
    <div className="ProductDetailContainer">
      <div className="ProductDetailContainer__image">
        <img src={prescription_only} alt="Prescription Only" />
      </div>
      <div className="ProductDetailContainer__details">
        <div style={{ fontWeight: "bold", marginBottom: "25px" }}>
          product name
        </div>
        <div>product category name</div>
        <div>price</div>
      </div>
    </div>
  );
};

export default ProductDetailContainer;
