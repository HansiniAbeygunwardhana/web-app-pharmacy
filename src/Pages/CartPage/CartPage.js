import React from "react";
import CartItem from "../../Components/Cart/CartItem/CartItem";
import CartDetails from "../../Components/Cart/CartDetails/CartDetails";
import "./CartPage.scss";
import Navbar from "../../Components/Navbar/Navbar";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import Footer from "../../Components/Footer/Footer";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();
  const onBtnClick = () => {
    navigate("/checkout");
  };
  return (
    <div className="CartPage">
      <Navbar />
      <SubNavbar />
      <div
        style={{ paddingLeft: "100px", fontWeight: "bold", paddingTop: "50px" }}
      >
        SHOPPING CART
      </div>
      <div className="CartPage__container">
        <div className="CartPage__container__item">
          <CartItem name={"PRODUCT NAME"} price={"500.00"} quantity={"2"} />
          <CartItem name={"PRODUCT NAME"} price={"500.00"} quantity={"2"} />
          <CartItem name={"PRODUCT NAME"} price={"500.00"} quantity={"2"} />
        </div>
        <div className="CartPage__container__item">
          <CartDetails
            subtotal={"1000"}
            tax={"500"}
            discount={"200"}
            total={"1300"}
            button={
              <PrimaryButton
                btnContent={"PROCEED TO CHECKOUT"}
                btnFunc={onBtnClick}
              />
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
