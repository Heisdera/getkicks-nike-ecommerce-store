import { useLocation, useParams } from "react-router-dom";
import { useProducts } from "./useProducts.ts";

const ITEMSPERPAGE = 40;

export function usePagination() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const pageNumber = Number(query.get("page")) || 1;
  const { collection } = useParams();

  const { isLoading, data, error } = useProducts(collection, pageNumber);

  const totalPages = Math.ceil(data?.total_results / ITEMSPERPAGE) || 0;

  // const prevPage = Math.max(currentPage - 1, 1);
  // const nextPage = Math.min(currentPage + 1, totalPages);

  // function goToPrevPage() {
  //   setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  // }

  // function goToNextPage() {
  //   setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  // }

  return {
    isLoading,
    error,
    data,
    pageNumber,
    totalPages,
    // currentPage,
    // prevPage,
    // nextPage,
    // goToNextPage,
    // goToPrevPage,
  };
}
