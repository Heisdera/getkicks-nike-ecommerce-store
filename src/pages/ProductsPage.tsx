import React from "react";
import Products from "../features/products/Products";
import PageTitle from "../components/PageTitle";
import { NavLink, useParams } from "react-router-dom";
import { collections } from "../data/data";

const ProductsPage: React.FC = () => {
  const { collection } = useParams();
  // console.log(collection);

  const collectionsWithActiveFirst = [...collections];

  const activeIndex = collections.findIndex((collection) => {
    const currentPath = window.location.pathname;
    return currentPath.includes(collection.link);
  });

  // console.log(activeIndex);

  if (activeIndex !== -1) {
    const activeCollection = collectionsWithActiveFirst.splice(activeIndex, 1);
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

      {activeIndex !== -1 ? (
        <PageTitle
          title={
            collections[activeIndex].text === "All"
              ? "Nike"
              : collections[activeIndex].text
          }
        />
      ) : (
        <PageTitle title="Nike" />
      )}

      <Products collection={collection} />
    </div>
  );
};

export default ProductsPage;
