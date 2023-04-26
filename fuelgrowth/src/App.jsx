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

const { LOGIN, DASHBOARD, REGISTER, CHAT_PAGE, INTEGRATION, PAGE_NOT_FOUND } =
  ROUTES;

const PrivateRoute = ({ Component }) => {
  // TODO: move it to common page layout component
  useEffect(() => {
    initFlowbite();
  });
  const authUser = getAuthUser();

  console.log("Is user authenticated", !!authUser);
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
        // loader: teamLoader,
      },
      {
        path: CHAT_PAGE,
        element: <PrivateRoute Component={ChatPage} />,
        // loader: teamLoader,
      },
      {
        path: INTEGRATION,
        element: <PrivateRoute Component={Integration} />,
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
  {
    path: PAGE_NOT_FOUND,
    element: <PageNotFound />,
  },
]);

export const App = () => {
  // useEffect(() => {
  //   console.log("INIT CALLED");
  //   initFlowbite();
  // });
  return (
    <>
      <RouterProvider router={router} />
      <ModalFC />
    </>
  );
};

export default App;
