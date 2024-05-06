import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRemoveItemFromWishlist } from "./WishlistSlice";
import { HiHeart } from "react-icons/hi";

interface props {
  wishlistItem: {
    name: string;
    image: string;
    path_url: string;
    price_string: string;
    currency: string;
    price: number;
  };
}

const WishlistItem: React.FC<props> = (props) => {
  const dispatch = useDispatch();

  function handleRemoveItemFromWishlist() {
    dispatch(setRemoveItemFromWishlist(props.wishlistItem));
  }

  return (
    <div className="group relative cursor-pointer rounded-xl border-[0.5px] bg-white p-2.5 md:p-2 lg:p-3">
      <Link
        className="flex aspect-[6/5] items-center justify-center rounded-md bg-[#f6f6f6]"
        to={`/products/${props.wishlistItem.path_url}`}
      >
        <img
          src={props.wishlistItem.image}
          alt={props.wishlistItem.path_url}
          className="pt-8 group-hover:opacity-85"
        />
      </Link>

      <HiHeart
        className="absolute right-4 top-4 h-6 w-6 flex-shrink-0 text-red-500 md:h-5 md:w-5 lg:right-5 lg:top-5 lg:h-6 lg:w-6"
        aria-hidden="true"
        onClick={() => handleRemoveItemFromWishlist()}
      />

      <Link
        to={`/products/${props.wishlistItem.path_url}`}
        className="flex items-center justify-between gap-4 pt-3 leading-tight"
      >
        <h3 className="text-sm font-medium text-gray-700">
          {props.wishlistItem.name}
        </h3>

        <p className="font-semibold text-gray-900">
          {props.wishlistItem.price_string}
        </p>
      </Link>
    </div>
  );
};

export default WishlistItem;
