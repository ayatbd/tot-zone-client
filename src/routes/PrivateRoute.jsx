
import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
  const location = useLocation();
  if (user) {
    return children;
  }

  return <Navigate state={{from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;