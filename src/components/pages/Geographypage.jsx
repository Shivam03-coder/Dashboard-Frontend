import React from "react";
import { useGetGeographyQuery } from "../../app/api/userapi";
import Pageheader from "../shared/header/Pageheader";
import Geographymap from "../pages-components/geography/Geographymap";

const Geographypage = () => {
  const { data } = useGetGeographyQuery();

  return (
    <section className="scrollbar-hidden relative p-7 h-screen overflow-y-auto">
      <Pageheader  title="GEOGRAPHY" subtitle="Users location" />
      <Geographymap data={data?.formattedLocations} />
    </section>
  );
};

export default Geographypage;
