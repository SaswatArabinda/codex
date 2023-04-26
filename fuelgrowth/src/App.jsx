import ChatPage from "./components/ChatPage";
import { ROUTES } from "./constants/routes";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { getAuthUser } from "./services";
import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { initFlowbite } from "flowbite";
import { Integration } from "./pages/Integration";
import { ModalFC } from "./components/Modal";
import { PageNotFound } from "./pages/PageNotFound";
import { PageLoader } from "./components/Loader";

const { LOGIN, DASHBOARD, REGISTER, CHAT_PAGE, INTEGRATION, PAGE_NOT_FOUND } =
  ROUTES;

const PrivateRoute = ({ Component }) => {
  // TODO: move it to common page layout component
  useEffect(() => {
    initFlowbite();
  });
  const authUser = getAuthUser();
  return authUser ? <Component /> : <Navigate to={LOGIN} replace />;
};

const router = createBrowserRouter([
  {
    path: DASHBOARD,
    element: <PrivateRoute Component={Dashboard} />,
    children: [
      {
        path: DASHBOARD,
        element: <PrivateRoute Component={ChatPage} />,
        loader: PageLoader,
      },
      {
        path: CHAT_PAGE,
        element: <PrivateRoute Component={ChatPage} />,
        loader: PageLoader,
      },
      {
        path: INTEGRATION,
        element: <PrivateRoute Component={Integration} />,
        loader: PageLoader,
      },
    ],
  },
  {
    path: LOGIN,
    element: <Login />,
    loader: PageLoader,
  },
  {
    path: REGISTER,
    element: <Register />,
    loader: PageLoader,
  },
  {
    path: PAGE_NOT_FOUND,
    element: <PageNotFound />,
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ModalFC />
    </>
  );
};

export default App;
