import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(UserContext);
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
