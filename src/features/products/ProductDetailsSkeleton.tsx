import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductDetailsSkeleton: React.FC = () => {
  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div>
            <Skeleton className="mb-1 h-[270px] rounded-md md:mb-2" />

            <div className="grid grid-cols-3 gap-x-2 md:gap-x-3">
              <Skeleton className="h-[110px] rounded-md" />

              <Skeleton className="h-[110px] rounded-md" />

              <Skeleton className="h-[110px] rounded-md" />
            </div>
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <Skeleton className="h-7 w-10" />

            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:gap-3">
              <Skeleton className="h-6" containerClassName="w-[20%]" />

              <Skeleton className="h-6" containerClassName="w-1/2" />
            </div>

            <div className="mb-10 mt-6 flex flex-col gap-1 sm:mt-8">
              <Skeleton className="h-9" />

              <Skeleton className="h-9" />
            </div>

            <Skeleton count={4} />

            <div className="mt-4 w-1/2">
              <Skeleton className="" count={3} containerClassName="w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSkeleton;
