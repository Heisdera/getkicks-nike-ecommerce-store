import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRemoveItemFromWishlist } from "./wishlistSlice";
import { HiHeart } from "react-icons/hi";
import _ from "lodash";
import Price from "../currencyConverter/Price";

interface WishlistItemProps {
  wishlistItem: {
    name: string;
    image: string;
    id: string;
    price_string: string;
    currency: string;
    price: number;
  };
}

const WishlistItem: React.FC<WishlistItemProps> = ({ wishlistItem }) => {
  const dispatch = useDispatch();

  function handleRemoveItemFromWishlist() {
    dispatch(setRemoveItemFromWishlist(wishlistItem));
  }

  return (
    <div className="group relative cursor-pointer rounded-xl border-[0.5px] bg-white p-2.5 md:p-2 lg:p-3">
      <Link
        className="flex aspect-[6/5] items-center justify-center rounded-md bg-[#f6f6f6]"
        to={`/products/${wishlistItem.id}`}
      >
        <img
          src={wishlistItem.image}
          alt={wishlistItem.id}
          className="pt-8 group-hover:opacity-85"
        />
      </Link>

      <HiHeart
        className="absolute right-4 top-4 h-6 w-6 flex-shrink-0 text-red-500 md:h-5 md:w-5 lg:right-5 lg:top-5 lg:h-6 lg:w-6"
        aria-hidden="true"
        onClick={() => handleRemoveItemFromWishlist()}
      />

      <Link
        to={`/products/${wishlistItem.id}`}
        className="flex items-center justify-between gap-4 pt-3 leading-tight"
      >
        <h3 className="text-sm font-medium text-gray-700">
          {_.truncate(wishlistItem.name, {
            length: 20,
            separator: " ",
            omission: "...",
          })}
        </h3>

        <p className="font-semibold text-gray-900">
          {/* €{wishlistItem.price} */}
          <Price className="" price={wishlistItem.price} />
        </p>
      </Link>
    </div>
  );
};

export default WishlistItem;
