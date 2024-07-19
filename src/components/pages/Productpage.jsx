import React from "react";
import Products from "../pages-components/products/Products";
import Pageheader from "../shared/header/Pageheader";
import Vortexloaders from "../shared/loaders/Vortexloaders";
import { useGetProductsQuery } from "../../app/api/userapi";

const Productpage = () => {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return (
      <>
        <Vortexloaders />
      </>
    );
  }
  
  return (
    <section className="scrollbar-hidden p-7 h-screen overflow-y-auto">
      <Pageheader title="PRODUCTS" subtitle="See your list of products" />
      <section className="pb-20">
        <Products data={data} />
      </section>
    </section>
  );
};

export default Productpage;
