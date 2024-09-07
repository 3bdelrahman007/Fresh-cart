import React from "react";
import Loading from "../Loading/Loading";
import ProductItem from "../ProductItem/ProductItem";
import useProducts from "../../Hooks/useProducts";

export default function Products() {
  
    const {data, isLoading , isError} = useProducts()

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Alert />;
  }

  return (
    <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
      {data.map((p) => (
        <ProductItem key={p._id} product={p} />
      ))}
    </div>
  );
}
