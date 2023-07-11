import React from "react";
import "./CartDetails.scss";

const CartDetails = ({ subtotal }) => {
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
          <div>{subtotal} LKR</div>
        </div>
        <div className="CartDetails__item">
          <div className="CartDetails__item__title">DISCOUNT</div>
          <div>{subtotal} LKR</div>
        </div>
        <div className="CartDetails__item">
          <div className="CartDetails__item__title">ORDER TOTAL</div>
          <div>{subtotal} LKR</div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
