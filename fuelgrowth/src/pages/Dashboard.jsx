import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Container />
    </>
  );
};
export default Dashboard;
