import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { HiShoppingBag } from "react-icons/hi2";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

import QuantityControlPanel from "@/components/QuantityControlPanel";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { Product } from "@/utils/types";
import { handleTruncateProductName } from "@/utils/helpers";
import { usePagination } from "@/hooks/usePagination";
import { selectCartItems, setAddItemToCart } from "../cart/cartSlice";
import {
  selectWishlistItems,
  setToggleWishlistItem,
} from "../wishlist/wishlistSlice";
import Price from "../currencyConverter/Price";
import ProductsSkeleton from "./ProductsSkeleton";

interface Props {
  collection: string | undefined;
}

const Products: React.FC<Props> = ({ collection }) => {
  const { isSmallScreen, isMobile, isTablet, isDesktop, isWideScreen } =
    useWindowWidth();
  const { isLoading, data, error, pageNumber, totalPages } = usePagination();
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);
  const cartItems = useSelector(selectCartItems);

  function handleAddItemToCart(item: Product) {
    dispatch(setAddItemToCart(item));

    console.log(item);
  }

  function handleToggleWishlistState(item: Product) {
    dispatch(setToggleWishlistItem(item));

    console.log(item);
  }

  if (isLoading) return <ProductsSkeleton />;

  if (error)
    return (
      <div className="mx-auto max-w-screen-xl px-4 text-4xl text-red-600">
        Error fetching data
      </div>
    );

  return (
    <>
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 md:grid-cols-4 lg:gap-x-4">
        {data?.products.map((product: Product) => (
          <div
            key={product.id}
            className="group relative h-fit cursor-pointer rounded-xl border-[0.5px] bg-white p-2.5 md:p-2 lg:p-3"
          >
            <Link
              className="flex aspect-[6/5] items-center justify-center rounded-md bg-[#f6f6f6]"
              to={`/products/${product.id}`}
            >
              <img
                src={product.image}
                alt={product.id}
                className="pt-8 group-hover:opacity-85"
              />
            </Link>

            {wishlistItems.find((item) => item.id === product.id) ? (
              <button
                type="button"
                title="Remove from Wishlist"
                className="absolute right-4 top-4 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-offset-2 lg:right-5 lg:top-5"
                onClick={() => handleToggleWishlistState(product)}
              >
                <HiHeart
                  className="h-6 w-6 flex-shrink-0 text-red-500 md:h-5 md:w-5 lg:h-6 lg:w-6"
                  aria-hidden="true"
                />
              </button>
            ) : (
              <button
                type="button"
                title="Remove from Wishlist"
                className="absolute right-4 top-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 lg:right-5 lg:top-5"
                onClick={() => handleToggleWishlistState(product)}
              >
                <HiOutlineHeart
                  strokeWidth={1}
                  className="h-6 w-6 flex-shrink-0 text-gray-500 transition-colors duration-200 hover:text-red-500 md:h-5 md:w-5 lg:h-6 lg:w-6"
                  aria-hidden="true"
                />
              </button>
            )}

            <Link
              to={`/products/${product.id}`}
              className="grid grid-cols-1 gap-[2px] py-2"
            >
              <h3 className="text-xs font-medium text-gray-600 min-[360px]:text-sm sm:text-base">
                {isWideScreen
                  ? handleTruncateProductName(product.name, 34)
                  : isDesktop
                    ? handleTruncateProductName(product.name, 24)
                    : isTablet
                      ? handleTruncateProductName(product.name, 19)
                      : isMobile
                        ? handleTruncateProductName(product.name, 22)
                        : handleTruncateProductName(product.name, 19)}
              </h3>

              <p className="text-xs font-semibold text-gray-900 min-[360px]:text-base xl:text-lg">
                {/* €{product.price} */}
                <Price className="" price={product.price} />
              </p>
            </Link>

            {cartItems.find((item) => item.id === product.id) ? (
              <QuantityControlPanel
                product={product}
                color="text-indigo-500 hover:text-indigo-600"
              />
            ) : (
              <button
                className="flex w-full justify-center gap-1.5 rounded-md bg-indigo-500 p-1.5 text-xs text-white hover:bg-indigo-600 min-[360px]:text-sm"
                type="button"
                onClick={() => handleAddItemToCart(product)}
              >
                <HiShoppingBag size={18} />
                <span>Add to cart</span>
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center space-x-4">
        <Pagination
          shape="rounded"
          size={`${isSmallScreen ? "small" : "medium"}`}
          page={pageNumber}
          count={totalPages}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/collections/${collection}${item.page === 1 ? "" : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </div>
    </>
  );
};

export default Products;
