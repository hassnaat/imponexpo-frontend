import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  // Assume you have a way to get the user's role from the token or state

  if (!user?.token) {
    // User not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  } else if (allowedRoles && !allowedRoles.includes(user?.accountType)) {
    // User does not have permission, redirect to home or another page
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
