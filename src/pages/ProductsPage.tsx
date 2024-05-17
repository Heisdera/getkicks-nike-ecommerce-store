import React from "react";
import Products from "../features/products/Products";
import PageTitle from "../components/PageTitle";
import { NavLink, useParams } from "react-router-dom";
import { collections } from "../data/data";
import { usePagination } from "@/hooks/usePagination";

const ProductsPage: React.FC = () => {
  const { data } = usePagination();
  const { collection } = useParams();

  // console.log(collection);

  const collectionsWithActiveFirst = [...collections];

  const activeCollectionIndex = collections.findIndex(
    (item) => item.link === collection,
  );

  // console.log(activeCollectionIndex);

  if (activeCollectionIndex !== -1) {
    const activeCollection = collectionsWithActiveFirst.splice(
      activeCollectionIndex,
      1,
    );

    collectionsWithActiveFirst.unshift(activeCollection[0]);
  }

  return (
    <div className="mx-auto max-w-3xl px-3 py-6 sm:px-6 md:max-w-[1684px] lg:px-8">
      <div className="hide-scrollbar space-x-2 overflow-x-scroll scroll-smooth whitespace-nowrap px-[2px] pb-6 pt-3 sm:space-x-3">
        {collectionsWithActiveFirst.map((collection, i) => (
          <NavLink
            to={`/collections/${collection.link}`}
            key={i}
            type="button"
            className={({ isActive }) =>
              `${isActive ? "border border-gray-100 bg-gray-100" : "border border-gray-200 transition-colors duration-500 md:hover:border-black"} rounded-md px-2.5 py-2 text-sm xl:text-base`
            }
          >
            {collection.text}
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
