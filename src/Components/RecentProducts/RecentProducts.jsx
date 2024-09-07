import React, { useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import Loading from "../Loading/Loading";
import Alert from "../Alert/Alert";
import useProducts from "../../Hooks/useProducts";

export default function RecentProducts() {

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
