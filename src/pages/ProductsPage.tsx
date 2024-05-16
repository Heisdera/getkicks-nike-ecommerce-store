import React from "react";
import Products from "../features/products/Products";
import PageTitle from "../components/PageTitle";
import { NavLink, useParams } from "react-router-dom";

const collections: { text: string; link: string }[] = [
  { text: "Nike Dunk", link: "nike-dunk" },
  { text: "Nike Air Force 1", link: "nike-air-force-1" },
  { text: "Nike Air Max", link: "nike-air-max" },
  { text: "Nike x Travis Scott", link: "travis-scott-cactus-jack" },
  { text: "Nike x Sacai", link: "nike-sacai" },
  { text: "Nike x Off-White", link: "nike-off-white" },
  { text: "Nike x Jacquemus", link: "nike-jacquemus" },
  { text: "Nike x NOCTA", link: "nike-nocta" },
  { text: "Nike Zoom Vomero 5", link: "nike-zoom-vomero-5" },
  { text: "Nike x Supreme", link: "supreme-nike" },
  { text: "Nike Cortez", link: "nike-cortez" },
  { text: "Nike Blazer", link: "nike-blazer" },
  { text: "Autres Nike", link: "autres-modeles-nike" },
];

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
        <PageTitle title={collections[activeIndex].text} />
      ) : (
        <PageTitle title="Nike" />
      )}

      <Products collection={collection} />
    </div>
  );
};

export default ProductsPage;
