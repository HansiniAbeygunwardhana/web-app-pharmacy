import { Navigate, Route, Router } from "react-router-dom";

const AuthGuard = ({ component: Component, roles, ...rest }) => {
  const isLoggedIn = !!localStorage.getItem("jwtToken");
  const userRoles = JSON.parse(localStorage.getItem("roles"));

  return (
    <Router>
      <Route
        {...rest}
        element={
          isLoggedIn &&
          userRoles &&
          (!roles || roles.some((role) => userRoles.includes(role))) ? (
            <Component />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Router>
  );
};

export default AuthGuard;
