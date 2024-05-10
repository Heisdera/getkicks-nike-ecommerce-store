<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
=======
import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
>>>>>>> 68a3d8d09d1af83ffabd6ecfa97e8f068cbe10c4
import { fetchProductsData } from "../services/fetchProductsData.ts";

export function useProducts(page: number) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProductsData(page),
  });

  return {
    isLoading,
    error,
    data,
  };
}
