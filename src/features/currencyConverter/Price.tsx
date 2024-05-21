import React from "react";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

import { useConversionRates } from "@/hooks/useConversionRates";
import { convertPrice } from "@/utils/helpers";
import { selectBaseCurrency, selectSelectedCurrency } from "./currencySlice";

interface Props {
  className: string;
  price: number;
}

const Price: React.FC<Props> = ({ className, price }) => {
  const selectedCurrency = useSelector(selectSelectedCurrency);
  const baseCurrency = useSelector(selectBaseCurrency);
  const { isLoading, data: rates, error } = useConversionRates(baseCurrency);

  if (isLoading)
    return (
      <span className="w-8 animate-pulse">
        <Skeleton />
      </span>
    );

  if (error) return <span className="text-red">reload</span>;

  const convertedPrice = convertPrice(price, rates, selectedCurrency);

  return <span className={`${className}`}>{convertedPrice}</span>;
};

export default Price;
