import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import { ProductList } from "../../Helpers/ProductList/ProductList";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductPage.scss";
import Sort from "../../Components/Sort/Sort";
import SearchBy from "../../Components/SearchBy/SearchBy";
import { Container } from "react-bootstrap";
import { Col, Row } from "antd";
import Pagination from "../../Components/Pagination/Pagination";
import Footer from "../../Components/Footer/Footer";

export const ProductPage = () => {
  return (
    <div className="ProductPage">
      <Navbar />
      <SubNavbar />
      <Sort />
      <Container fluid>
        <Row>
          <Col>
            <SearchBy />
          </Col>
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
      <Pagination />
      <Footer />
    </div>
  );
};

export default ProductPage;
