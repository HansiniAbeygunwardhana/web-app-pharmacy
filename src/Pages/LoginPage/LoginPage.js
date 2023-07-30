import React from "react";
import LoginForm from "../../Components/Forms/LoginForm/LoginForm";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="LoginPage__title">LOG IN</div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
