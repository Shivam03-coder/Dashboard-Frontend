import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Root from "../components/Root";
import Dashboard from "../components/pages/Dashboard";
import Productpage from "../components/pages/Productpage";
import Customerpage from "../components/pages/Customerpage";

const Approutes = () => {
  return (
    <Routes>
      <Route element={<Root/>}>
        <Route path="/" element={<Navigate to={"/dashboard"}  />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/customer" element={<Customerpage />} />
        <Route />
      </Route>
    </Routes>
  );
};

export default Approutes;
