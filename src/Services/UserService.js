import axios from "axios";

const BASE_API_URL = "http://localhost:8080";

const UserService = {
  login: (loginData) => {
    return axios.post(`${BASE_API_URL}/authenticate`, loginData);
  },

  forUser: () => {
    return axios.get(`${BASE_API_URL}/forUser`, { responseType: "text" });
  },

  forAdmin: () => {
    return axios.get(`${BASE_API_URL}/forAdmin`, { responseType: "text" });
  },

  customRequest: (url, config) => {
    if (url.startsWith(BASE_API_URL)) {
      return axios.get(url, config);
    } else {
      return axios.get(url, {
        ...config,
        headers: {
          ...config.headers,
          "No-Auth": "True",
        },
      });
    }
  },

  roleMatch: (allowedRoles) => {
    let isMatch = false;
    const userRoles = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  },
};

export default UserService;
