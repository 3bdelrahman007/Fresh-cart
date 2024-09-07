import React from "react";
import Loading from "../Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import Alert from "../Alert/Alert";
import axios from "axios";
import CategoryItem from "../CategoryItem/CategoryItem";

export default function Categories() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: async () =>
      await axios.get("https://ecommerce.routemisr.com/api/v1/categories"),
    select: (data) => data.data.data,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Alert />;
  }
  return (
    <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
      {data.map((p) => (
        <CategoryItem key={p._id} category={p} />
      ))}
    </div>
  );
}
