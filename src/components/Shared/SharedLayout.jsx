import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../index.components";
export const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
