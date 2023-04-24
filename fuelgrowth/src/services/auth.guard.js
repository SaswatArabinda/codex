import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthUser } from "../services";

const AuthGuard = () => {
  const authUser = getAuthUser();
  return authUser ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default AuthGuard;
