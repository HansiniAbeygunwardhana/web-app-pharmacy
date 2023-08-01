import React from "react";
import "./LoginForm.scss";
import { useState } from "react";
import UserService from "../../../Services/UserService";
import UserAuthService from "../../../Services/UserAuthService";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  let navigate = useNavigate("");

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserPasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginData = {
        userName,
        userPassword,
      };

      const response = await UserService.login(loginData);
      const { user, jwtToken } = response.data;

      UserAuthService.setRoles(user.role);
      UserAuthService.setToken(jwtToken);

      const role = user.role[0].roleName;
      if (role === "admin") {
        navigate("/admindashboard");
      } else {
        // Redirect to user page
        console.log("Redirecting to user page");
        navigate("/customerdashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle error, show error message, or any other action
    }
  };

  return (
    <div className="container mt-5 login_form">
      <form
        className="card"
        style={{ padding: "20px" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={userName}
          name="userName"
          id="userName"
          placeholder="Enter username"
          className="form-control mb-3"
          onChange={handleUserNameChange}
        />

        <input
          type="password"
          value={userPassword}
          name="userPassword"
          id="userPassword"
          placeholder="Enter password"
          className="form-control mb-3"
          onChange={handleUserPasswordChange}
        />

        <input
          type="submit"
          value={"LOGIN"}
          className="btn btn-outline-primary form-control-rounded-0 "
        />
      </form>
    </div>
  );
};

export default LoginForm;
