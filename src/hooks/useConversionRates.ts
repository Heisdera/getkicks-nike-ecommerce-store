import { useQuery } from "@tanstack/react-query";
import { fetchConversionRates } from "../services/fetchConversionRates";

export function useConversionRates(baseCurrency: string) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["conversionRates", baseCurrency],
    queryFn: () => fetchConversionRates(baseCurrency),
  });

  return { isLoading, error, data };
}
