import React from "react";
import "./CartDetails.scss";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

const CartDetails = ({ subtotal, tax, discount, total, button }) => {
  const navigate = useNavigate("");
  return (
    <div className="CartDetails">
      <div className="CartDetails__title">SUMMARY</div>
      <div className="CartDetails__content">
        <div className="CartDetails__item">
          <div className="CartDetails__item__title">SUBTOTAL</div>
          <div>{subtotal} LKR</div>
        </div>
        <div className="CartDetails__item">
          <div className="CartDetails__item__title">TAX</div>
          <div>{tax} LKR</div>
        </div>
        {/* <div className="CartDetails__item">
          <div className="CartDetails__item__title">DISCOUNT</div>
          <div>{discount} LKR</div>
        </div> */}
        <div
          className="CartDetails__item"
          style={{ paddingTop: "10px", borderTop: "1px solid black" }}
        >
          <div className="CartDetails__item__title">ORDER TOTAL</div>
          <div>{total} LKR</div>
        </div>
      </div>
      <div style={{ paddingTop: "15px" }}>{button}</div>
      <div
        style={{
          color: "blue",
          fontSize: "15px",
          paddingTop: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/product");
        }}
      >
        CONTINUE SHOPPING
      </div>
    </div>
  );
};

export default CartDetails;
