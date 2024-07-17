import { useGetProductsQuery } from "../../../app/api/userapi";
import Skeleton from "../../shared/skeleton/Skeleton";
import ProductsCards from "./ProductsCards";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 w-[98%] md:w-[95%] mx-auto mt-5 gap-5 pb-20  overflow-y-auto">
      {isLoading ? (
          <Skeleton />
      ) : (
        <>
          {data?.map((Products) => (
            <ProductsCards Products={Products} />
          ))}
        </>
      )}
    </section>
  );
};

export default Products;
