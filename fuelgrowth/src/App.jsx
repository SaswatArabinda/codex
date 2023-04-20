import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ROUTES } from "./constants/routes";
import authService from "./services/auth.service.js";

const { LOGIN, DASHBOARD, REGISTER } = ROUTES;

const PrivateRoute = ({ Component }) => {
  const authUser = authService.getAuthUser();
  console.log("Is authenticated", authUser);
  return authUser ? <Component /> : <Navigate to={LOGIN} replace />;
};

const router = createBrowserRouter([
  {
    path: DASHBOARD,
    element: <PrivateRoute Component={Dashboard} />,
  },
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: REGISTER,
    element: <Register />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
