import React, { useMemo } from "react";
import Pageheader from "../shared/header/Pageheader";
import Breakdownchart from "../pages-components/breakdown/Breakdownchart";
import { useGetSalesOverviewQuery } from "../../app/api/userapi";
import Vortexloaders from "../shared/loaders/Vortexloaders";

const Breakdownpage = () => {
  const { data, isLoading } = useGetSalesOverviewQuery();

  if (isLoading) {
    return (
      <>
        <Vortexloaders />
      </>
    );
  }

  const newData = useMemo(() => {
    if (data && data.length > 0) {
      const sales = data[0].salesByCategory;
      return Object.keys(sales).map((key) => ({
        type: key,
        value: sales[key],
      }));
    }
    return [];
  }, [data]);

  return (
    <section className="scrollbar-hidden p-7 h-screen overflow-y-auto">
      <Pageheader title="BREAKDOWN" subtitle="See breakdown of sales" />
      <section className="pb-20">
        <Breakdownchart data={newData} />
      </section>
    </section>
  );
};

export default Breakdownpage;
