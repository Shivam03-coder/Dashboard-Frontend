import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Root from "../components/Root";
import Balltriangle from "../components/shared/loaders/Balltriangle";

// Use React.lazy to dynamically import each page component
const Productpage = lazy(() => import("../components/pages/Productpage"));
const Customerpage = lazy(() => import("../components/pages/Customerpage"));
const Transcationspage = lazy(() =>
  import("../components/pages/Transcationspage")
);
const OverviewPage = lazy(() => import("../components/pages/OverviewPage"));
const Breakdownpage = lazy(() => import("../components/pages/Breakdownpage"));
const Adminpage = lazy(() => import("../components/pages/Adminpage"));

const Approutes = () => {
  return (
    <Suspense fallback={<Balltriangle />}>
      <Routes>
        <Route element={<Root />}>
          <Route path="/products" element={<Productpage />} />
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
