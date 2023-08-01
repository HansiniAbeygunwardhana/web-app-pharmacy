import React, { useEffect, useState } from "react";
import CartItem from "../../Components/Cart/CartItem/CartItem";
import CartDetails from "../../Components/Cart/CartDetails/CartDetails";
import "./CartPage.scss";
import Navbar from "../../Components/Navbar/Navbar";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import Footer from "../../Components/Footer/Footer";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import CartService from "../../Services/CartService";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();
  const [cartItem, setCartItem] = useState([]);
  // Change to single cart item, not an array
  const onBtnClick = () => {
    navigate("/checkout");
  };

  const tax = 2; // Replace this with the actual tax value from the API response or any other source

  // Calculate the total value
  const calculateTotal = () => {
    if (cartItem.length > 0) {
      const subtotal = cartItem.reduce(
        (total, cartItem) =>
          total + cartItem.product.productPrice * cartItem.quantity,
        0
      );
      const taxValue = parseFloat(tax);
      return subtotal - taxValue;
    }
    return 0; // Default value when cartItem is empty
  };

  useEffect(() => {
    // Fetch the cart details when the component mounts
    fetchCartDetails();
  }, []);
  const handleCartItemDeleted = (deletedCartId) => {
    // Update the cartItem state to remove the deleted cart item
    setCartItem((prevCartItem) =>
      prevCartItem.filter((item) => item.cartId !== deletedCartId)
    );
  };
  const handleCartItemUpdated = (updatedCartId, updatedQuantity) => {
    // Update the quantity of the specific cart item in the cartItem state
    setCartItem((prevCartItem) =>
      prevCartItem.map((item) =>
        item.cartId === updatedCartId
          ? { ...item, quantity: updatedQuantity }
          : item
      )
    );
  };

  const fetchCartDetails = () => {
    CartService.getCartDetails()
      .then((response) => {
        const cartDetails = response.data;
        if (Array.isArray(cartDetails) && cartDetails.length > 0) {
          // Update the state with the entire array of cart items
          setCartItem(cartDetails);
        } else {
          // Handle the case when the cart is empty or API response is not as expected
          setCartItem([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching cart details:", error);
      });
  };

  return (
    <div className="CartPage">
      <Navbar logoDestination="/" />
      <SubNavbar />
      <div
        style={{ paddingLeft: "100px", fontWeight: "bold", paddingTop: "50px" }}
      >
        SHOPPING CART
      </div>
      <div className="CartPage__container">
        <div className="CartPage__container__item">
          {/* Render the cart item if it exists */}
          {cartItem.length > 0 ? (
            cartItem.map((cartItem) => (
              <CartItem
                key={cartItem.cartId}
                name={cartItem.product.productName}
                price={cartItem.product.productPrice}
                quantity={cartItem.quantity}
                cartId={cartItem.cartId}
                onCartItemDeleted={handleCartItemDeleted}
              />
            ))
          ) : (
            <p>No cart items available.</p>
          )}
        </div>
        <div className="CartPage__container__item">
          {cartItem.length > 0 && (
            <CartDetails
              subtotal={cartItem.reduce(
                (total, cartItem) =>
                  total + cartItem.product.productPrice * cartItem.quantity,
                0
              )}
              tax={tax}
              total={calculateTotal()} // Calculate and pass the total value here
              button={
                <PrimaryButton
                  btnContent={"PROCEED TO CHECKOUT"}
                  btnFunc={onBtnClick}
                />
              }
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
