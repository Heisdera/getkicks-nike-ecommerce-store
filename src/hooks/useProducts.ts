import { useQuery } from "@tanstack/react-query";
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
