import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Root from "../components/Root";
import Dashboard from "../components/pages/Dashboard";
import Productpage from "../components/pages/Productpage";
import Customerpage from "../components/pages/Customerpage";
import Transcationspage from "../components/pages/Transcationspage";
import OverviewPage from "../components/pages/OverviewPage";

const Approutes = () => {
  return (
    <Routes>
      <Route element={<Root/>}>
        <Route path="/" element={<Navigate to={"/dashboard"}  />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/customer" element={<Customerpage />} />
        <Route path="/transcations" element={<Transcationspage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route />
      </Route>
    </Routes>
  );
};

export default Approutes;
