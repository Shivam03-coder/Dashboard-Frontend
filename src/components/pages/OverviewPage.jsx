import React from "react";
import Pageheader from "../shared/header/Pageheader";
import OverviewCharts from "../pages-components/overview/OverviewCharts";
import { useGetSalesOverviewQuery } from "../../app/api/userapi";

const OverviewPage = () => {
  const { data } = useGetSalesOverviewQuery();

  return (
    <section className="scrollbar-hidden p-7 h-screen overflow-y-auto">
      <Pageheader title="OVERVIEW" subtitle="See Overview of Data" />
      <section className="pb-20">
        <OverviewCharts data={data?.overAllstats} />
      </section>
    </section>
  );
};

export default OverviewPage;
