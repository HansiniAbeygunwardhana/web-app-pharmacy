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
import ProductService from "../../Services/ProductService";
import CartService from "../../Services/CartService";
import { useNavigate, useParams } from "react-router-dom";

export const ProductPage = () => {
  const [productItemList, setProductItemList] = useState([]);
  const [filteredItemList, setFilteredItemList] = useState([]);
  // const [searchedByItemList, setSearchedByItemList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([[], []]);
  const [selectedSortValue, setSelectedSortValue] = useState("");
  const [addToCartClicked, setAddToCartClicked] = useState(false);
  const navigate = useNavigate();
  const { productId } = useParams();
  // useEffect(() => {
  //   setProductItemList(ProductList);
  //   setFilteredItemList(ProductList);
  // }, [searchedByItemList]);

  useEffect(() => {
    // Initialize the addToCartClicked state array with false for each product item
    setAddToCartClicked(new Array(productItemList.length).fill(false));
  }, [productItemList]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    ProductService.getAllProducts()
      .then((response) => {
        const recievedProducts = response.data;
        setProductItemList(recievedProducts);
        setFilteredItemList(recievedProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBtnClick = (product) => {
    navigate(`/placeorderform/${product.id}`, { state: { product } });
  };

  const onIconClick = (productId, index) => {
    console.log("productId", productId);
    CartService.addToCart(productId)
      .then((response) => {
        // Handle the response from the API, e.g., show a success message
        console.log("Product added to cart successfully!");
        // Update the addToCartClicked state for the clicked product item
        const updatedAddToCartClicked = [...addToCartClicked];
        updatedAddToCartClicked[index] = true;
        setAddToCartClicked(updatedAddToCartClicked);
      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        console.error("Error adding product to cart:", error);
      });
  };

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
      <Navbar logoDestination="/" />
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
                  isInCart={addToCartClicked[key]} // Use the addToCartClicked state for the corresponding product
                  onBtnClick={() => handleBtnClick(productItem)}
                  onIconClick={() => onIconClick(productItem.id, key)} // Pass the index to update the correct element in the addToCartClicked array
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
