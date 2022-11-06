import React from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components/index.components";
import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import Payments from "./pages/Payments/Payments";

export const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/jobs" element={<Jobs />}></Route>
      <Route path="/payments" element={<Payments />}></Route>
    </Route>
  </Routes>
);
