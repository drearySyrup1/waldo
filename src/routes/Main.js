import React from "react";
import TopBar from "../components/TopBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

export default Main;
