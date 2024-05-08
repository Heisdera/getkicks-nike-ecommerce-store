import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
// import Skeleton from "react-loading-skeleton";

const ProductsSkeleton: React.FC = () => {
  // const
  return (
    <div className="grid min-h-[calc(80vh_-_6.6rem)] grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 md:grid-cols-4 lg:gap-x-4">
      {Array.from({ length: 4 }).map((_, i) => (
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
