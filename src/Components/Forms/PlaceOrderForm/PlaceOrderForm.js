import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OrderService from "../../../Services/OrderService";

const PlaceOrderForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state;
  const [formData, setFormData] = useState({
    fullName: "",
    fullAddress: "",
    contactNumber: "",
    alternateContactNumber: "",
    orderProductQuantityList: [
      {
        productId: product.id,
        quantity: 1,
      },
    ],
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make the API call to place the order
    OrderService.placeOrder(formData)
      .then((response) => {
        // Handle the successful order placement
        console.log("Order placed successfully");
        // Redirect to success page or perform any other action
        navigate.push("/cart");
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
        // Display error message or perform any other action
      });
  };

  return (
    <div className="container mt-5 login_form">
      <form
        className="card"
        style={{ padding: "20px" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={formData.fullName}
          name="fullName"
          id="fullName"
          placeholder="Full Name"
          className="form-control mb-3"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formData.fullAddress}
          name="fullAddress"
          id="fullAddress"
          placeholder="City Name"
          className="form-control mb-3"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formData.contactNumber}
          name="contactNumber"
          id="contactNumber"
          placeholder="Contact Number"
          className="form-control mb-3"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formData.alternateContactNumber}
          name="alternateContactNumber"
          id="alternateContactNumber"
          placeholder="Alternate Contact Number"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="submit"
          value="PLACE ORDER"
          className="btn btn-outline-primary form-control-rounded-0"
        />
      </form>
    </div>
  );
};

export default PlaceOrderForm;
