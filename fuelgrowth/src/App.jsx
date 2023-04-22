import ChatPage from "./components/ChatPage";
import { ROUTES } from "./constants/routes";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import authService from "./services/auth.service.js";
import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { initFlowbite } from "flowbite";

const { LOGIN, DASHBOARD, REGISTER, CHAT_PAGE } = ROUTES;

const PrivateRoute = ({ Component }) => {
  // TODO: move it to common page layout component
  useEffect(() => {
    console.log("INIT CALLED");
    initFlowbite();
  });
  const authUser = authService.getAuthUser();
  return authUser ? <Component /> : <Navigate to={LOGIN} replace />;
};

const router = createBrowserRouter([
  {
    path: DASHBOARD,
    element: <PrivateRoute Component={Dashboard} />,
    children: [
      {
        path: DASHBOARD,
        element: <ChatPage />,
        // loader: teamLoader,
      },
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
  // useEffect(() => {
  //   console.log("INIT CALLED");
  //   initFlowbite();
  // });
  return <RouterProvider router={router} />;
};

export default App;
