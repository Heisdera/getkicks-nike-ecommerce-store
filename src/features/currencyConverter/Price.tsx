import React from "react";
import { useSelector } from "react-redux";
import { selectBaseCurrency, selectSelectedCurrency } from "./currencySlice";
import { useConversionRates } from "@/hooks/useConversionRates";
import { convertPrice } from "@/utils/helpers";

interface Props {
  className: string;
  price: number;
}

const Price: React.FC<Props> = ({ className, price }) => {
  const selectedCurrency = useSelector(selectSelectedCurrency);
  const baseCurrency = useSelector(selectBaseCurrency);
  const { isLoading, data: rates } = useConversionRates(baseCurrency);

  if (isLoading) return <div className="animate-pulse">Loading</div>;
  const convertedPrice = convertPrice(price, rates, selectedCurrency);

  console.log(rates);

  return <div className={`default-classes ${className}`}>{convertedPrice}</div>;
};

export default Price;
