import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create();
const navigate = useNavigate("");

api.interceptors.request.use((config) => {
  // Add your token logic here
  const token = localStorage.getItem("jwtToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle error responses
    if (error.response.status === 401) {
      // Redirect to login page if unauthorized
      navigate().push("/login");
    } else if (error.response.status === 403) {
      // Redirect to forbidden page if forbidden
      navigate().push("/forbidden");
    }
    return Promise.reject(error);
  }
);

export default api;
