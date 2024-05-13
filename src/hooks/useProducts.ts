import { useQuery } from "@tanstack/react-query";
import { fetchProductsData } from "../services/fetchProductsData.ts";

export function useProducts(collection: string | undefined, page: number) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["collection", collection, page],
    queryFn: () => fetchProductsData(collection, page),
  });

  return {
    isLoading,
    error,
    data,
  };
}
