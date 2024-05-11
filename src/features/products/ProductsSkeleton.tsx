import { useWindowWidth } from "@/hooks/useWindowWidth";
import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductsSkeleton: React.FC = () => {
  let arrayLength = 6;
  const { isTablet, isDesktop } = useWindowWidth();

  if (isTablet || isDesktop) arrayLength = 12;

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 md:grid-cols-4 lg:gap-x-4">
      {Array.from({ length: arrayLength }).map((_, i) => (
        <div key={i} className="flex flex-col gap-2">
          <Skeleton className="h-[170px] w-full md:h-[130px] lg:h-[200px] xl:h-[250px]" />

          <Skeleton className="h-6 w-full sm:h-8" />

          <Skeleton className="h-6 w-full sm:h-8" />
        </div>
      ))}
    </div>
  );
};

export default ProductsSkeleton;
