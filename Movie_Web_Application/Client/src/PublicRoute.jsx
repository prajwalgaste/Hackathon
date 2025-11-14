import React from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const isAuth = localStorage.getItem("auth");

  return isAuth ? <Navigate to="/home" replace /> : children;
}
