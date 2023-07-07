import axios from "axios";

const CATEGORY_BASE_REST_API_URL = "http://localhost:8080/category";

class CategoryService {
  static getAllCategories() {
    return axios.get(`${CATEGORY_BASE_REST_API_URL}/list`);
  }

  static createCategory(category) {
    return axios.post(`${CATEGORY_BASE_REST_API_URL}/create`, category);
  }

  static updateCategory(categoryId, category) {
    return axios.put(
      `${CATEGORY_BASE_REST_API_URL}/update/${categoryId}`,
      category
    );
  }

  static deleteProduct(categoryId) {
    return axios.delete(`${CATEGORY_BASE_REST_API_URL}/delete/${categoryId}`);
  }
}

export default CategoryService;
