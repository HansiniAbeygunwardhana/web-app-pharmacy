import axios from "axios";
import { api } from "../Auth/AuthInterceptor";

const PRODUCT_BASE_REST_API_URL = "http://localhost:8080/product";

class ProductService {
  static getAllProducts() {
    return api.get(`${PRODUCT_BASE_REST_API_URL}/list`);
  }

  static getProductById(productId) {
    return api.get(`${PRODUCT_BASE_REST_API_URL}/list/${productId}`);
  }

  static createProduct(product) {
    return api.post(`${PRODUCT_BASE_REST_API_URL}/add`, product);
  }

  static updateProduct(productId, product) {
    return api.put(`${PRODUCT_BASE_REST_API_URL}/update/${productId}`, product);
  }

  static deleteProduct(productId) {
    return api.delete(`${PRODUCT_BASE_REST_API_URL}/delete/${productId}`);
  }

  static getProductDetails(isSingleProductCheckout, productId) {
    return api.get(
      `${PRODUCT_BASE_REST_API_URL}/getProductDetails/${isSingleProductCheckout}/${productId}`
    );
  }
}

export default ProductService;
