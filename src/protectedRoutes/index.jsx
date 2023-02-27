import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserContext";

export const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate("/");
    }
  }, []);
  return <>{user ? children : null}</>;
};
