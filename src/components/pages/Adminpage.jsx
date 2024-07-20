import React from "react";
import Pageheader from "../shared/header/Pageheader";
import { useGetAdminsQuery } from "../../app/api/userapi";
import Vortexloaders from "../shared/loaders/Vortexloaders";
import Customertable from "../pages-components/customer/Customertable";
import { useSelector } from "react-redux";
import usePagination from "../../hooks/usePagination";

const Adminpage = () => {
  const { data, isLoading } = useGetAdminsQuery();

  const { currentPage, itemsPerpage } = useSelector(
    (state) => state.pagination
  );

  if (isLoading) {
    return (
      <>
        <Vortexloaders />
      </>
    );
  }

  const { admins } = data;

  const Toatlpages = Math.ceil(admins.length / itemsPerpage);

  const Data = usePagination(currentPage, itemsPerpage, admins);

  return (
    <section className="scrollbar-hidden p-7 h-screen overflow-y-auto">
      <Pageheader title="ADMINS" subtitle="See list of admins" />
      <section className="pb-20">
        <Customertable Data={Data} Toatlpages={Toatlpages} />
      </section>
    </section>
  );
};

export default Adminpage;
