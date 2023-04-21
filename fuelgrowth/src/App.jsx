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
import ChatPage from "./components/ChatPage";

const { LOGIN, DASHBOARD, REGISTER, CHAT_PAGE } = ROUTES;

const PrivateRoute = ({ Component }) => {
  const authUser = authService.getAuthUser();
  console.log("Is authenticated", authUser);
  return authUser ? <Component /> : <Navigate to={LOGIN} replace />;
};

const router = createBrowserRouter([
  {
    path: DASHBOARD,
    element: <PrivateRoute Component={Dashboard} />,
    children: [
      {
        path: CHAT_PAGE,
        element: <ChatPage />,
        // loader: teamLoader,
      },
    ],
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
