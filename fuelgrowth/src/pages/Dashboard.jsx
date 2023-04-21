import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};
export default Dashboard;
