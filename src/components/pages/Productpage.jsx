import React from "react";
import Products from "../layout/products/Products";
import Pageheader from "../shared/header/Pageheader";

const Productpage = () => {
  return (
    <section className="scrollbar-hidden p-7 h-screen overflow-y-auto">
      <Pageheader title='PRODUCTS' subtitle="See your list of products" />
      <Products />
    </section>
  );
};

export default Productpage;
