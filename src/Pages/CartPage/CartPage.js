import React from "react";
import CartItem from "../../Components/Cart/CartItem/CartItem";
import CartDetails from "../../Components/Cart/CartDetails/CartDetails";
import "./CartPage.scss";

function CartPage() {
  return (
    <div className="CartPage">
      <div className="CartPage__container">
        <div className="CartPage__container__item">
          <CartItem name={"PRODUCT NAME"} price={"500.00"} quantity={"2"} />
          <CartItem name={"PRODUCT NAME"} price={"500.00"} quantity={"2"} />
          <CartItem name={"PRODUCT NAME"} price={"500.00"} quantity={"2"} />
        </div>
        <div className="CartPage__container__item">
          <CartDetails subtotal={"500.00"} />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
