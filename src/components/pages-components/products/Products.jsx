import ProductsCards from "./ProductsCards";

const Products = ({ data }) => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 w-[98%] md:w-[95%] mx-auto mt-5 gap-5 pb-20  overflow-y-auto">
      <>
        {data?.map((Products) => (
          <ProductsCards Products={Products} />
        ))}
      </>
    </section>
  );
};

export default Products;
