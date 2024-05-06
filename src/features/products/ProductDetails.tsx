import React from "react";
import { useDispatch } from "react-redux";
import { selectCartItems, setAddItemToCart } from "../cart/CartSlice";
import { productDetails } from "../../utils/types";
import { useSelector } from "react-redux";
import {
  selectWishlistItems,
  setToggleWishlistItem,
} from "../wishlist/WishlistSlice";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import QuantityControlPanel from "../../components/QuantityControlPanel";

interface props {
  productId: string | undefined;
  productDetails: {
    name: string;
    id: string;
    price_string: string;
    currency: string;
    price: number;
    image: string;
    images: string[];
    description: {
      color: string[];
      desc_1: string;
      desc_2: string;
      desc_3: {
        sku: string;
        release_date: string;
      };
    };
  };
}

const ProductDetails: React.FC<props> = (props) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);
  const cartItems = useSelector(selectCartItems);

  function handleAddItemToCart(item: productDetails) {
    dispatch(setAddItemToCart(item));
  }

  function handleToggleWishlistState(item: productDetails) {
    dispatch(setToggleWishlistItem(item));
  }

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            <div className="col-span-2 rounded-md bg-[#f6f6f6] hover:outline-none hover:ring-1 hover:ring-indigo-200">
              <img className="w-full" src={props.productDetails.image} alt="" />
            </div>
            <div className="rounded-md bg-[#f6f6f6] hover:outline-none hover:ring-1 hover:ring-indigo-200">
              <img
                className="w-full"
                src={props.productDetails.images[0]}
                alt=""
              />
            </div>
            <div className="rounded-md bg-[#f6f6f6] hover:outline-none hover:ring-1 hover:ring-indigo-200">
              <img
                className="w-full"
                src={props.productDetails.images[1]}
                alt=""
              />
            </div>
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-medium text-gray-900 sm:text-2xl">
              {props.productDetails.name}
            </h1>
            <div className="mt-2 sm:flex sm:items-center sm:gap-4">
              <p className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                ${props.productDetails.price}
              </p>

              <div className="mt-2 flex items-center gap-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                </div>
                <p className="text-sm font-medium leading-none text-indigo-500">
                  (5.0)
                </p>
                <a
                  href="#"
                  className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline"
                >
                  345 Reviews
                </a>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 sm:flex sm:items-center sm:gap-4">
                {wishlistItems.find(
                  (item) => item.id === props.productDetails.id,
                ) ? (
                  <button
                className="group flex w-full items-center justify-center gap-2 rounded-lg border border-red-500 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition-colors duration-300 hover:bg-gray-100 hover:text-indigo-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 hover:border-gray-200"
                type="button"
                onClick={() => handleToggleWishlistState(props.productDetails)}
              >
                    <HiHeart
                      className="h-5 w-5 flex-shrink-0 text-red-500 md:h-5 md:w-5 lg:right-5 lg:top-5 lg:h-6 lg:w-6"
                      aria-hidden="true"
                    />
                    <span className="text-red-500 transition-colors duration-300 group-hover:text-gray-500">Remove from favorites</span>
                  </button>
                ) : (
                  <button
                className="group flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition-colors duration-300 hover:bg-gray-100 hover:text-indigo-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
                type="button"
                onClick={() => handleToggleWishlistState(props.productDetails)}
              >
                    <HiOutlineHeart
                      strokeWidth={1}
                      className="h-5 w-5 flex-shrink-0 text-gray-500 transition-colors duration-300 group-hover:text-red-500 md:h-5 md:w-5 lg:right-5 lg:top-5 lg:h-6 lg:w-6"
                      aria-hidden="true"
                      role="button"
                    />
                    <span>Add to favorites</span>
                  </button>
                )}

              {cartItems.find((item) => item.id === props.productDetails.id) ? (
                <div className="mx-auto mt-4 rounded-lg px-1 py-1 font-medium text-gray-600 sm:mt-0 sm:w-[20%] lg:w-4/12">
                  <QuantityControlPanel
                    product={props.productDetails}
                    color="text-indigo-500 hover:text-indigo-600"
                  />
                </div>
              ) : (
                <button
                  className="mt-4 flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 sm:mt-0"
                  type="button"
                  onClick={() => handleAddItemToCart(props.productDetails)}
                >
                  <svg
                    className="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Add to cart
                </button>
              )}
            </div>

            <hr className="my-6 border-gray-200 md:my-8" />

            <p className="mb-6 text-gray-500">
              {props.productDetails.description.desc_1}
            </p>

            <p className="text-gray-500">
              {props.productDetails.description.desc_2}
            </p>

            <div className="mt-2">
              <p>
                <span className="text-sm">Color: </span>
                <span className="font-medium">
                  {props.productDetails.description.color[0]}
                  {props.productDetails.description?.color[1]}
                </span>
              </p>

              <p>
                <span className="text-sm">Sku: </span>
                <span className="font-medium">
                  {props.productDetails.description.desc_3.sku}
                </span>
              </p>

              <p>
                <span className="text-sm">Release date: </span>
                <span className="font-medium">
                  {props.productDetails.description.desc_3.release_date}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
