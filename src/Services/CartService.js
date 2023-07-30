import axios from "axios";
import { api } from "../Auth/AuthInterceptor";

const CART_BASE_REST_API_URL = "http://localhost:8080";

class CartService {
  static addToCart(productId) {
    return api.get(`${CART_BASE_REST_API_URL}/addToCart/${productId}`);
  }

  static getCartDetails() {
    return api.get(`${CART_BASE_REST_API_URL}/getCartDetails`);
  }

  static deleteCartItem(cartId) {
    return api.delete(`${CART_BASE_REST_API_URL}/deleteCartItem/${cartId}`);
  }
  static updateCartItemQuantity(cartId, quantity) {
    const requestBody = { quantity };
    return api.put(
      `${CART_BASE_REST_API_URL}/updateCartItemQuantity/${cartId}`,
      requestBody
    );
  }
}

export default CartService;
