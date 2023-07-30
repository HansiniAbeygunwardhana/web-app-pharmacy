import React from "react";
import "./Checkout.scss";
import Navbar from "../../Components/Navbar/Navbar";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import CartDetails from "../../Components/Cart/CartDetails/CartDetails";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useEffect, useState } from "react";
import CartService from "../../Services/CartService";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import OrderService from "../../Services/OrderService";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const [orderInput, setOrderInput] = useState({
    paymentMethod: "",
    orderProductQuantityList: [
      {
        productId: 0,
        quantity: 1,
      },
    ],
  });

  useEffect(() => {
    CartService.getCartDetails()
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart details:", error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrderInput((prevOrderInput) => ({
      ...prevOrderInput,
      [name]: value,
    }));
  };

  const handleBtnClick = () => {
    if (cartItems.length > 1) {
      // More than one cart item, set isSingleProductCheckout to false
      OrderService.placeOrder(orderInput, false)
        .then((response) => {
          // Navigate to the cart page
          navigate("/cart");
        })
        .catch((error) => {
          console.error("Error placing order:", error);
        });
    } else if (cartItems.length === 1) {
      // Single cart item, set isSingleProductCheckout to true
      OrderService.placeOrder(orderInput, true)
        .then((response) => {
          // Navigate to the cart page
          navigate("/cart");
        })
        .catch((error) => {
          console.error("Error placing order:", error);
        });
    } else {
      console.error("No items in the cart");
    }
  };

  const handleOrderPlacement = () => {
    // Call the API to place the order
    // Assuming OrderService.placeOrder() returns a Promise
    return OrderService.placeOrder(orderInput)
      .then((response) => {
        console.log("Order placed successfully");
        // Refresh the page after successful order placement
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error placing order:", error);
      });
  };
  return (
    <div className="Checkout">
      <Navbar />
      <SubNavbar />
      <div
        style={{ paddingLeft: "150px", fontWeight: "bold", paddingTop: "50px" }}
      >
        CHECKOUT
      </div>
      <div className="Checkout__container">
        <div className="Checkout__container__sub">
          <CartDetails
            subtotal={"1000"}
            tax={"500"}
            discount={"200"}
            total={"1300"}
          />
        </div>
        <div className="Checkout__container__sub">
          <div className="Checkout__container__title">
            SELECT PAYMENT METHOD
          </div>
          <div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={orderInput.paymentMethod}
              name="radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value="VISA/MASTER"
                control={<Radio />}
                label="VISA / MASTER"
                name="paymentMethod"
              />
              <FormControlLabel
                value="BANK_PAYMENT"
                control={<Radio />}
                label="BANK PAYMENT"
                name="paymentMethod"
              />
              <FormControlLabel
                value="CASH_ON_PICKUP"
                control={<Radio />}
                label="CASH ON PICKUP"
                name="paymentMethod"
              />
            </RadioGroup>
          </div>
          <div style={{ paddingTop: "10px" }}>
            <PrimaryButton
              btnContent={"PLACE ORDER"}
              btnFunc={() => handleBtnClick(cartItems)}
            />
            <PrimaryButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
