import React from "react";
import Pageheader from "../shared/header/Pageheader";
import { useGetCustomerQuery } from "../../app/api/userapi";
import Customertable from "../pages-components/customer/Customertable";
import { useSelector } from "react-redux";
import usePagination from "../../hooks/usePagination";
import Vortexloaders from "../shared/loaders/Vortexloaders";

const Customerpage = () => {
  const { data, isLoading, isError } = useGetCustomerQuery();

  const { currentPage, itemsPerpage } = useSelector(
    (state) => state.pagination
  );

  const Toatlpages = Math.ceil(data?.length / itemsPerpage);

  if (isLoading) {
    return (
      <>
        <Vortexloaders />
      </>
    );
  }

  const Data = usePagination(currentPage, itemsPerpage, data);

  return (
    <section className="scrollbar-hidden md:p-7 h-screen overflow-auto">
      <Pageheader title="CUSTOMERS" subtitle="See your list of customer" />
      <section className="pb-20">
        <Customertable Data={Data} Toatlpages={Toatlpages} />
      </section>
    </section>
  );
};

export default Customerpage;
