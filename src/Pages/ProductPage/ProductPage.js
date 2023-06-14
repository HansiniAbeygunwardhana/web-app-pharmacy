import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import { ProductList } from "../../Helpers/ProductList/ProductList";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductPage.scss";
import Sort from "../../Components/Sort/Sort";
import SearchBy from "../../Components/SearchBySection/SearchBySection";
import { Container } from "react-bootstrap";
import { Col, Row } from "antd";
import CustomPagination from "../../Components/Pagination/Pagination";
import Footer from "../../Components/Footer/Footer";

export const ProductPage = () => {
  const [productItemList, setProductItemList] = useState([]);
  const [filteredItemList, setFilteredItemList] = useState([]);
  // const [searchedByItemList, setSearchedByItemList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([[], []]);
  const [selectedSortValue, setSelectedSortValue] = useState("");

  // useEffect(() => {
  //   setProductItemList(ProductList);
  //   setFilteredItemList(ProductList);
  // }, [searchedByItemList]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:8080/product/list");
      const jsonResult = await result.json();
      setProductItemList(jsonResult);
      setFilteredItemList(jsonResult);
    };
    fetchData();
  }, []);

  const onSortValueSelected = (e) => {
    let sortValue = e.target.value;
    setSelectedSortValue(sortValue);
    if (selectedCategory) {
      if (sortValue === "available") {
        setFilteredItemList(
          productItemList.filter(
            (product) =>
              product.available === true &&
              product.categoryId === selectedCategory
          )
        );
      } else if (sortValue === "unavailable") {
        setFilteredItemList(
          productItemList.filter(
            (product) =>
              product.available === false &&
              product.categoryId === selectedCategory
          )
        );
      } else if (sortValue === "price") {
        setFilteredItemList(
          productItemList
            .filter((product) => product.categoryId === selectedCategory)
            .sort((a, b) => a.price - b.price)
        );
      } else {
        setFilteredItemList(
          productItemList.filter(
            (product) => product.categoryId === selectedCategory
          )
        );
      }
    } else if (selectedPriceRange) {
      if (sortValue === "available") {
        setFilteredItemList(
          productItemList.filter(
            (product) =>
              product.available === true &&
              product.productPrice >= selectedPriceRange[0] &&
              product.productPrice <= selectedPriceRange[1]
          )
        );
      } else if (sortValue === "unavailable") {
        setFilteredItemList(
          productItemList.filter(
            (product) =>
              product.available === false &&
              product.productPrice >= selectedPriceRange[0] &&
              product.productPrice <= selectedPriceRange[1]
          )
        );
      } else if (sortValue === "price") {
        setFilteredItemList(
          productItemList
            .filter(
              (product) =>
                product.productPrice >= selectedPriceRange[0] &&
                product.productPrice <= selectedPriceRange[1]
            )
            .sort((a, b) => a.price - b.price)
        );
      } else {
        setFilteredItemList(
          productItemList.filter(
            (product) =>
              product.productPrice >= selectedPriceRange[0] &&
              product.productPrice <= selectedPriceRange[1]
          )
        );
      }
    } else {
      if (sortValue === "available") {
        setFilteredItemList(
          productItemList.filter((product) => product.available === true)
        );
      } else if (sortValue === "unavailable") {
        setFilteredItemList(
          productItemList.filter((product) => product.available === false)
        );
      } else if (sortValue === "price") {
        setFilteredItemList(productItemList.sort((a, b) => a.price - b.price));
      } else {
        setFilteredItemList(productItemList);
      }
    }
  };

  const onSearchedValueSelected = (searchValue) => {
    let value = searchValue.target.value;
    setSelectedCategory(value);
    // setSearchedByItemValue(value);
    if (value && searchValue) {
      setFilteredItemList(
        productItemList.filter((product) => product.categoryId === value)
      );
    } else {
      setFilteredItemList(productItemList);
    }
  };

  const minVal = Math.min(
    ...productItemList.map((product) => product.productPrice)
  );
  console.log("Min", minVal);

  const maxVal = Math.max(
    ...productItemList.map((product) => product.productPrice)
  );
  console.log("Max", maxVal);

  const onChange = (value) => {
    let onChangeMinValue = value[0];
    let onChangeMaxValue = value[1];
    setSelectedPriceRange([onChangeMinValue, onChangeMaxValue]);

    if (selectedSortValue) {
      if (selectedSortValue === "available") {
        setFilteredItemList(
          productItemList.filter(
            (product) =>
              product.productPrice >= onChangeMinValue &&
              product.productPrice <= onChangeMaxValue &&
              product.available === true
          )
        );
      } else if (selectedSortValue === "unavailable") {
        setFilteredItemList(
          productItemList.filter(
            (product) =>
              product.productPrice >= onChangeMinValue &&
              product.productPrice <= onChangeMaxValue &&
              product.available === false
          )
        );
      } else if (selectedSortValue === "all") {
        setFilteredItemList(
          productItemList.filter(
            (product) =>
              product.productPrice >= onChangeMinValue &&
              product.productPrice <= onChangeMaxValue
          )
        );
      } else if (selectedSortValue === "price") {
        setFilteredItemList(
          productItemList
            .filter(
              (product) =>
                product.productPrice >= selectedPriceRange[0] &&
                product.productPrice <= selectedPriceRange[1]
            )
            .sort((a, b) => a.price - b.price)
        );
      }
    } else {
      setFilteredItemList(
        productItemList.filter(
          (product) =>
            product.productPrice >= onChangeMinValue &&
            product.productPrice <= onChangeMaxValue
        )
      );
    }
  };

  return (
    <div className="ProductPage">
      <Navbar />
      <SubNavbar />
      <Sort onSortValueChanged={onSortValueSelected} />
      <Container fluid>
        <Row>
          <Col span={6}>
            <SearchBy
              onSearchedValueChanged={onSearchedValueSelected}
              onChange={onChange}
              minRange={minVal}
              maxRange={maxVal}
            />
          </Col>
          <Col span={6}>
            <div className="ProductList">
              {filteredItemList.map((productItem, key) => (
                <ProductCard
                  key={productItem.id}
                  image={productItem.productImageUrl}
                  name={productItem.productName}
                  rating={productItem.productRating}
                  price={productItem.productPrice}
                  isAvailable={productItem.available}
                  isPrescriptionMed={productItem.prescriptionMed}
                  category={productItem.categoryId}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <CustomPagination dataLength={ProductList.length} pageSize={3} />
      <Footer />
    </div>
  );
};

export default ProductPage;
