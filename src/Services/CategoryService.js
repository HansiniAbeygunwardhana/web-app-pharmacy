import axios from "axios";
import { api } from "../Auth/AuthInterceptor";

const CATEGORY_BASE_REST_API_URL = "http://localhost:8080/category";

class CategoryService {
  static getAllCategories() {
    return api.get(`${CATEGORY_BASE_REST_API_URL}/list`);
  }

  static createCategory(category) {
    return api.post(`${CATEGORY_BASE_REST_API_URL}/create`, category);
  }

  static updateCategory(categoryId, category) {
    return api.put(
      `${CATEGORY_BASE_REST_API_URL}/update/${categoryId}`,
      category
    );
  }

  static deleteProduct(categoryId) {
    return api.delete(`${CATEGORY_BASE_REST_API_URL}/delete/${categoryId}`);
  }
}

export default CategoryService;
