import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Root from "../components/Root";
import Balltriangle from "../components/shared/loaders/Balltriangle";
const Productpage = lazy(() => import("../components/pages/Productpage"));
import Customerpage from "../components/pages/Customerpage";
import Transcationspage from "../components/pages/Transcationspage";
import OverviewPage from "../components/pages/OverviewPage";
import Breakdownpage from "../components/pages/Breakdownpage";
import Adminpage from "../components/pages/Adminpage";

const Approutes = () => {
  return (
    <Suspense fallback={<Balltriangle />}>
      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<Productpage />} />
          <Route path="/customer" element={<Customerpage />} />
          <Route path="/transcations" element={<Transcationspage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/breakdown" element={<Breakdownpage />} />
          <Route path="/admin" element={<Adminpage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Approutes;
