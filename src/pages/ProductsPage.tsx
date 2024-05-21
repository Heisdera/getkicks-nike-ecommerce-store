import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Products from "@/features/products/Products";
import PageTitle from "@/components/PageTitle";
import { collections } from "@/data/data";
import { usePagination } from "@/hooks/usePagination";

const ProductsPage: React.FC = () => {
  const { data } = usePagination();
  const { collection } = useParams();

  // console.log(collection);

  // const collectionsWithActiveFirst = [...collections];

  const activeCollectionIndex = collections.findIndex(
    (item) => item.link === collection,
  );

  // console.log(activeCollectionIndex);

  // if (activeCollectionIndex !== -1) {
  //   const activeCollection = collectionsWithActiveFirst.splice(
  //     activeCollectionIndex,
  //     1,
  //   );

  //   collectionsWithActiveFirst.unshift(activeCollection[0]);
  // }

  return (
    <div className="mx-auto max-w-3xl px-3 py-6 sm:px-6 md:max-w-[1684px] lg:px-8">
      <div className="hide-scrollbar space-x-2 overflow-x-scroll scroll-smooth whitespace-nowrap px-[2px] pb-6 pt-3 sm:space-x-3">
        {collections.map((item, i) => (
          <NavLink
            to={`/collections/${item.link}`}
            key={i}
            type="button"
            className={
              ({ isActive }) =>
                `${isActive ? "rounded-md" : "rounded-md border border-gray-200 transition-colors duration-200 hover:border-black"} relative px-2.5 py-2 text-sm xl:text-base`
              // `${isActive ? "rounded-md" : "rounded-md border border-gray-200 bg-[#f9f9f9] transition-colors duration-200 hover:border-black"} relative px-2.5 py-2 text-sm xl:text-base`
            }
          >
            {collection === item.link && (
              <motion.span
                layoutId="collection"
                transition={{
                  type: "spring",
                  duration: 1,
                }}
                className="absolute -inset-[1px] left-0 right-0 z-10 rounded-md border border-gray-800 bg-[#f9f9f9]"
                // className="absolute -inset-[1px] left-0 right-0 z-10 rounded-md border border-gray-800 bg-[#f9f9f9]"
              ></motion.span>
            )}

            <span className="relative z-30">{item.text}</span>
          </NavLink>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <PageTitle
          title={
            collections[activeCollectionIndex].text === "All"
              ? "Nike"
              : collections[activeCollectionIndex].text
          }
        />
        <p className="mr-2 space-x-1 text-sm">
          <span className="font-medium text-gray-700">
            {data?.total_results}
          </span>
          <span className="text-gray-500">Results</span>
        </p>
      </div>

      <Products collection={collection} />
    </div>
  );
};

export default ProductsPage;
