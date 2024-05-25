import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/fetchProducts";

export function useProducts(
  collection: string | undefined,
  pageNumber: number,
) {
  const { isLoading, data, error } = useQuery({
    queryKey: [`collection ${collection}`, `page ${pageNumber}`],
    queryFn: () => fetchProducts(collection, pageNumber),
  });

  return {
    isLoading,
    error,
    data,
  };
}
