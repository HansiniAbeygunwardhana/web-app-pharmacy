import React from "react";

class UserAuthService {
  setRoles(roles) {
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  getRoles() {
    return JSON.parse(localStorage.getItem("roles"));
  }

  setToken(jwtToken) {
    localStorage.setItem("jwtToken", jwtToken);
  }

  getToken() {
    return localStorage.getItem("jwtToken");
  }

  clear() {
    localStorage.clear();
  }

  isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}

export default new UserAuthService();
