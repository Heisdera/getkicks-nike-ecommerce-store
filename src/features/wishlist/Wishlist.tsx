import React from "react";
import { useSelector } from "react-redux";
import { selectWishlistItems } from "./wishlistSlice";
import WishlistItem from "./WishlistItem";

const Wishlist: React.FC = () => {
  const wishlistItems = useSelector(selectWishlistItems);

  return (
    <div className="min-h-[calc(100vh_-_12.1rem)]">
      <div className="grid grid-cols-2 gap-x-2 gap-y-8 sm:gap-x-4 md:grid-cols-4 lg:gap-x-4">
        {wishlistItems?.map((item, i) => (
          <WishlistItem key={i} wishlistItem={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
