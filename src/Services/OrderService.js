import axios from "axios";
import { api } from "../Auth/AuthInterceptor";

const ORDER_BASE_REST_API_URL = "http://localhost:8080";

class OrderService {
  static placeOrder(orderInput, isSingleProductCheckout) {
    return api.post(
      `${ORDER_BASE_REST_API_URL}/placeOrder/${isSingleProductCheckout}`,
      orderInput
    );
  }
  static getAllOrderDetails(status) {
    return api.get(`${ORDER_BASE_REST_API_URL}/getAllOrderDetails/${status}`);
  }
}

export default OrderService;
