import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import { ProductList } from "../../Helpers/ProductList/ProductList";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Container } from "react-bootstrap";
import { Col, Row } from "antd";
import "./SearchResults.scss";
import Footer from "../../Components/Footer/Footer";

export const SearchResultsPage = () => {
  const [productItemList, setProductItemList] = useState(ProductList);

  return (
    <div className="ProductPage">
      <Navbar logoDestination="/" />
      <SubNavbar />
      <div className="ProductList">
        {productItemList.map((productItem, key) => (
          <ProductCard
            key={productItem.id}
            image={productItem.image}
            name={productItem.name}
            rating={productItem.rating}
            price={productItem.price}
            isAvailable={productItem.isAvailable}
            isPrescriptionMed={productItem.isPrescriptionMed}
            category={productItem.category}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResultsPage;
