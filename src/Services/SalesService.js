import axios from "axios";
import { api } from "../Auth/AuthInterceptor";

const SALES_BASE_REST_API_URL = "http://localhost:8080/api/sales";

class SalesService {
  static getSalesForDay(date) {
    // Use axios to make the API call and pass the date as a request parameter
    return api.get(`${SALES_BASE_REST_API_URL}/day`, {
      params: {
        date: date, // Assuming 'date' is a valid Date object or a string in 'yyyy-MM-dd' format
      },
    });
  }
  static getSalesForLast7Days() {
    return api.get(`${SALES_BASE_REST_API_URL}/last7days`);
  }
  static getSalesForLast30Days() {
    return api.get(`${SALES_BASE_REST_API_URL}/last30days`);
  }
  static getSalesValueByDayOfWeek() {
    return api.get(`${SALES_BASE_REST_API_URL}/bydayofweek`);
  }
  static getPercentageOfSalesForEachProduct() {
    return api.get(`${SALES_BASE_REST_API_URL}/percentages`);
  }
}

export default SalesService;
