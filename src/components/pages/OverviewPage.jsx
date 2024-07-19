import React from "react";
import Pageheader from "../shared/header/Pageheader";
import OverviewCharts from "../pages-components/overview/OverviewCharts";
import { useGetSalesOverviewQuery } from "../../app/api/userapi";
import Vortexloaders from "../shared/loaders/Vortexloaders";

const OverviewPage = () => {
  const { data ,isLoading } = useGetSalesOverviewQuery();

  if (isLoading) {
    return (
      <>
        <Vortexloaders />
      </>
    );
  }

  const ChartData = data[0].monthlyData;
  return (
    <section className="scrollbar-hidden p-7 h-screen overflow-y-auto">
      <Pageheader title="OVERVIEW" subtitle="See Overview of Data" />
      <section className="pb-20">
        <OverviewCharts ChartData={ChartData} />
      </section>
    </section>
  );
};

export default OverviewPage;
