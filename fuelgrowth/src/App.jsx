import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { RequireAuth, useIsAuthenticated } from "react-auth-kit";
import { ROUTES } from "./constants/routes";

const { LOGIN, DASHBOARD, REGISTER } = ROUTES;

//https://github.com/react-auth-kit/react-auth-kit/issues/1023
//https://github.com/react-auth-kit/react-auth-kit/issues/1193
const PrivateRoute = ({ Component }) => {
  const isAuthenticated = useIsAuthenticated();
  const auth = isAuthenticated();
  const navigate = useNavigate();
  console.log("Is authenticated", auth);
  if (auth) {
    return <Component />;
  }
  return <Navigate to={LOGIN} replace />;
  // navigate(LOGIN);
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
