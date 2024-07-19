import React from "react";
import { Route, Routes } from "react-router-dom";
import Root from "../components/Root";
import Productpage from "../components/pages/Productpage";
import Customerpage from "../components/pages/Customerpage";
import Transcationspage from "../components/pages/Transcationspage";
import OverviewPage from "../components/pages/OverviewPage";
import Breakdownpage from "../components/pages/Breakdownpage";
import Adminpage from "../components/pages/Adminpage";

const Approutes = () => {
  return (
      <Routes>
        <Route element={<Root />}>
          <Route path="/products" element={<Productpage />} />
          <Route path="/customer" element={<Customerpage />} />
          <Route path="/transcations" element={<Transcationspage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/breakdown" element={<Breakdownpage />} />
          <Route path="/admin" element={<Adminpage />} />
          <Route />
        </Route>
      </Routes>
  );
};

export default Approutes;
