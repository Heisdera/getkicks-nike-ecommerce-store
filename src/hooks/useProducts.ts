import { useQuery } from "@tanstack/react-query";
import { fetchProductsData } from "../services/fetchProductsData.ts";

export function useProducts() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProductsData,
  });

  return { isLoading, error, products };
}
