import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create();

const AuthInterceptor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use((config) => {
      const token = localStorage.getItem("jwtToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          navigate("/login");
        } else if (error.response.status === 403) {
          navigate("/forbidden");
        }
        return Promise.reject(error);
      }
    );

    // Clean up interceptors when the component is unmounted
    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate]);

  // Render the component
  return null;
};

export { api, AuthInterceptor };
