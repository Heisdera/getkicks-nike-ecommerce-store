import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
import { fetchProductsData } from "../services/fetchProductsData.ts";

const ITEMSPERPAGE = 40;

export function useProducts() {
  // const { page } = useParams();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { isLoading, data, error } = useQuery({
    queryKey: ["products", currentPage],
    queryFn: () => fetchProductsData(currentPage),
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
  });

  return {
    isLoading,
    error,
    data,
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
  };
}
