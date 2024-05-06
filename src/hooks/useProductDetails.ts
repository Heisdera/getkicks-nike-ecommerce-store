import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../services/fetchProductDetails";

export function useProductDetails() {
  const { productId } = useParams();

  const {
    isLoading,
    data: productDetails,
    error,
  } = useQuery({
    queryKey: ["product-details", productId], // adding the productId to this array is very important so that when switching between each product, the data fetched would be unique and not the same
    queryFn: () => fetchProductDetails(productId),
    retry: false, // this would stop react query from retrying to fetch the data
  });

  return { isLoading, error, productDetails };
}
