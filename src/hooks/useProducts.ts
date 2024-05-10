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
<<<<<<< HEAD
    queryKey: ["products", page],
    queryFn: () => fetchProductsData(page),
=======
    queryKey: ["products", currentPage],
    queryFn: () => fetchProductsData(currentPage),
    placeholderData: keepPreviousData,
  });

  const totalPages = Math.ceil(data?.total_results / ITEMSPERPAGE) || 0;

  function goToNextPage() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  }

  function goToPrevPage() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  console.log({
    currentPage,
    totalPages,
>>>>>>> 68a3d8d09d1af83ffabd6ecfa97e8f068cbe10c4
  });

  return {
    isLoading,
    error,
    data,
  };
}
