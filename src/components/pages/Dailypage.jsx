import React, { useState } from "react";
import Pageheader from "../shared/header/Pageheader";
import OverviewCharts from "../pages-components/overview/OverviewCharts";
import { useGetSalesOverviewQuery } from "../../app/api/userapi";
import Datepicker from "../shared/datepicker/Datepicker";

const Dailypage = () => {
  const { data } = useGetSalesOverviewQuery();
  const [date, setDate] = useState(new Date());


  
  console.log("🚀 ~ Dailypage ~ data:", data);
  if (!data) {
    return <h1>LOADING............</h1>;
  }
  const ChartData = data[0]?.monthlyData;
  console.log("🚀 ~ Dailypage ~ ChartData:", ChartData);
  return (
    <section className="scrollbar-hidden p-7 h-screen overflow-y-auto">
      <Pageheader title="DAILY SALES" subtitle="See daily sales Data" />
      <Datepicker date={date} setDate={setDate} />
      <section className="pb-20">
        <OverviewCharts ChartData={ChartData} />
      </section>
    </section>
  );
};

export default Dailypage;
