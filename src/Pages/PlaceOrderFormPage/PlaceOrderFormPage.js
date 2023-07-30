import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import PlaceOrderForm from "../../Components/Forms/PlaceOrderForm/PlaceOrderForm";
import CartDetails from "../../Components/Cart/CartDetails/CartDetails";
import BillDetails from "../../Components/BillDetails/BillDetails";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductService from "../../Services/ProductService";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";

const PlaceOrderFormPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    productName: "",
    categoryId: 1,
    productPrice: 1,
    quantity: 1,
    available: false,
    prescriptionMed: false,
    file: null,
    productRating: 1,
    expDate: "",
    threshold: 1,
  });

  useEffect(() => {
    if (location.state && location.state.productId) {
      const productId = location.state.productId;
      getProductById(productId); // Fetch the product details
    }
  });

  useEffect(() => {
    console.log(formData);
  });

  const getProductById = async (productId) => {
    try {
      const response = await ProductService.getProductById(productId);
      const product = response.data;
      setFormData({
        productName: product.productName,
        categoryId: product.categoryId,
        productPrice: product.productPrice || 1,
        quantity: product.quantity || 1,
        available: product.available || false,
        prescriptionMed: product.prescriptionMed || false,
        file: null,
        productRating: product.productRating || 1,
        expDate: product.expDate || "",
        threshold: product.threshold || 1,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <div style={{ display: "flex" }}>
        <PlaceOrderForm />
        <div className="Checkout__container__sub">
          <div className="Checkout__container__title">
            SELECT PAYMENT METHOD
          </div>
          <div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="VISA / MASTER"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="BANK PAYMENT"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="CASH ON PICKUP"
              />
            </RadioGroup>
          </div>
          <div style={{ paddingTop: "10px" }}>
            <PrimaryButton btnContent={"PLACE ORDER"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderFormPage;
