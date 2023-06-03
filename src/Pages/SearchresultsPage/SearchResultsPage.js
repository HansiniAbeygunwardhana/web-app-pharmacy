import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import { ProductList } from "../../Helpers/ProductList/ProductList";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Sort from "../../Components/Sort/Sort";
import SearchBy from "../../Components/ShopBy/ShopBy";
import { Container } from "react-bootstrap";
import { Col, Row } from "antd";
import CustomPagination from "../../Components/Pagination/Pagination";
import Footer from "../../Components/Footer/Footer";

export const SearchResultsPage = () => {
  return (
    <div className="ProductPage">
      <Navbar />
      <SubNavbar />
      {/* <Sort /> */}
      <Container fluid>
        <Row>
          {/* <Col>
            <SearchBy />
          </Col> */}
          <Col xs={9}>
            {" "}
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
          </Col>
        </Row>
      </Container>
      <CustomPagination dataLength={ProductList.length} pageSize={3} />
      <Footer />
    </div>
  );
};

export default SearchResultsPage;
