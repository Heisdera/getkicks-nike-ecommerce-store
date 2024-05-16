import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, setAddItemToCart } from "../cart/cartSlice.ts";
import {
  selectWishlistItems,
  setToggleWishlistItem,
} from "../wishlist/wishlistSlice.ts";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { product } from "../../utils/types";
import QuantityControlPanel from "../../components/QuantityControlPanel";
import _ from "lodash";
import { useWindowWidth } from "../../hooks/useWindowWidth.ts";
import ProductsSkeleton from "./ProductsSkeleton.tsx";
import { usePagination } from "@/hooks/usePagination.ts";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { HiShoppingBag } from "react-icons/hi2";
import Price from "../currencyConverter/Price.tsx";

interface props {
  collection: string | undefined;
}

const Products: React.FC<props> = ({ collection }) => {
  const { isSmallScreen, isMobile, isTablet, isDesktop } = useWindowWidth();
  const { isLoading, data, error, page, totalPages } = usePagination();
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);
  const cartItems = useSelector(selectCartItems);

  function handleAddItemToCart(item: product) {
    dispatch(setAddItemToCart(item));
  }

  function handleToggleWishlistState(item: product) {
    dispatch(setToggleWishlistItem(item));
  }

  function handleTruncateProductName(productName: string, length: number) {
    return _.truncate(productName, { length: length });
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
        {data?.products.map((product: product) => (
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
              <HiHeart
                className="absolute right-4 top-4 h-6 w-6 flex-shrink-0 text-red-500 md:h-5 md:w-5 lg:right-5 lg:top-5 lg:h-6 lg:w-6"
                aria-hidden="true"
                onClick={() => handleToggleWishlistState(product)}
              />
            ) : (
              <HiOutlineHeart
                strokeWidth={1}
                className="absolute right-4 top-4 h-6 w-6 flex-shrink-0 text-gray-500 transition-colors duration-300 hover:text-red-500 md:h-5 md:w-5 lg:right-5 lg:top-5 lg:h-6 lg:w-6"
                aria-hidden="true"
                role="button"
                onClick={() => handleToggleWishlistState(product)}
              />
            )}

            <Link
              to={`/products/${product.id}`}
              className="flex items-center justify-between gap-1 py-3 leading-tight sm:gap-4"
            >
              <h3 className="text-xs font-medium text-gray-600 min-[360px]:text-sm sm:text-base">
                {isDesktop
                  ? handleTruncateProductName(product.name, 18)
                  : isTablet
                    ? handleTruncateProductName(product.name, 14)
                    : isMobile
                      ? handleTruncateProductName(product.name, 16)
                      : handleTruncateProductName(product.name, 12)}
              </h3>

              <p className="text-xs font-semibold text-gray-900 min-[360px]:text-sm sm:text-base">
                <Price className="" price={product.price} />
                {/* {product.price_string} */}
              </p>
            </Link>

            {cartItems.find((item) => item.id === product.id) ? (
              <QuantityControlPanel
                product={product}
                color="text-indigo-500 hover:text-indigo-600"
              />
            ) : (
              <button
                className="flex w-full justify-center gap-1.5 rounded-md bg-indigo-500 p-1.5 text-sm text-white hover:bg-indigo-600"
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
          page={page}
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
