import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../components/pages/Dashboard";

const Approutes = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route />
      </Route>
    </Routes>
  );
};

export default Approutes;
