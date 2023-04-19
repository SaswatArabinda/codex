import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { RequireAuth } from "react-auth-kit";
import { ROUTES } from "./constants/routes";

const { LOGIN, DASHBOARD, REGISTER } = ROUTES;
const router = createBrowserRouter([
  {
    path: DASHBOARD,
    element: (
      <RequireAuth loginPath={LOGIN}>
        <Dashboard />
      </RequireAuth>
    ),
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
