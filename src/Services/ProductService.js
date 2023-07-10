import axios from "axios";

const PRODUCT_BASE_REST_API_URL = "http://localhost:8080/product";

class ProductService {
  static getAllProducts() {
    return axios.get(`${PRODUCT_BASE_REST_API_URL}/list`);
  }

  static getProductById(productId) {
    return axios.get(`${PRODUCT_BASE_REST_API_URL}/list/${productId}`);
  }

  static createProduct(product) {
    return axios.post(`${PRODUCT_BASE_REST_API_URL}/add`, product);
  }

  static updateProduct(productId, product) {
    return axios.put(
      `${PRODUCT_BASE_REST_API_URL}/update/${productId}`,
      product
    );
  }

  static deleteProduct(productId) {
    return axios.delete(`${PRODUCT_BASE_REST_API_URL}/delete/${productId}`);
  }
}

export default ProductService;
