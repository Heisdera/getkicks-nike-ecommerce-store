import { fetchConversionRates } from "@/services/fetchConversionRates";
import { fetchProducts } from "@/services/fetchProducts";
import { QueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { selectBaseCurrency } from "@/features/currencyConverter/currencySlice";
import { useSelector } from "react-redux";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const usePrefetchData = () => {
  const query = new URLSearchParams(location.search);
  const pageNumber = Number(query.get("page")) || 1;
  const { collection } = useParams();

  const baseCurrency = useSelector(selectBaseCurrency);

  useEffect(() => {
    const prefetchData = async () => {
      await queryClient.prefetchQuery({
        queryKey: ["conversionRates", baseCurrency],
        queryFn: () => fetchConversionRates(baseCurrency),
      });
      await queryClient.prefetchQuery({
        queryKey: [`collection ${collection}`, `page ${pageNumber}`],
        queryFn: () => fetchProducts(collection, pageNumber),
      });
    };

    prefetchData();
  }, [collection, pageNumber, baseCurrency]);
};

export { queryClient, usePrefetchData };
