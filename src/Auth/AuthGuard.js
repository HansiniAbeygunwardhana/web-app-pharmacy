import { Navigate, Route, Router } from "react-router-dom";
import { useOutlet } from "react-router-dom";

const AuthGuard = ({ Component, roles, ...rest }) => {
  const isLoggedIn = !!localStorage.getItem("jwtToken");
  const userRoles = JSON.parse(localStorage.getItem("roles"));
  const outlet = useOutlet();
  if (!isLoggedIn && !userRoles) {
    return <Navigate to="/login" replace />;
  }

  return <>{outlet}</>;
};

export default AuthGuard;
