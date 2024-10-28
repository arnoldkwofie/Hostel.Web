


import React from "react";
import { Navigate } from "react-router-dom";


const AuthGuard = ({ isAuthenticated, children }) => {
  isAuthenticated = localStorage.getItem("token");
  // Check if the user is authenticated
  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/" />;
    
  }

  // If authenticated, render the children components
  return children;
};

export default AuthGuard;


