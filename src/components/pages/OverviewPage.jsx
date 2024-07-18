import React from "react";
import Pageheader from "../shared/header/Pageheader";
import OverviewCharts from "../pages-components/overview/OverviewCharts";
import { useGetSalesOverviewQuery } from "../../app/api/userapi";

const OverviewPage = () => {
  const { data } = useGetSalesOverviewQuery();
  if (!data) {
    return <h1>LOADING............</h1>;
  }
  const ChartData = data.overAllstats[0].monthlyData
  ;

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
