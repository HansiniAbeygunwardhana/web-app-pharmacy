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
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";

const Checkout = () => {
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

export default Checkout;
