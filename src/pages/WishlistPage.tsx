import React from "react";
import Wishlist from "../features/wishlist/Wishlist";
import PageTitle from "../components/PageTitle";

const WishlistPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 md:max-w-[1684px] lg:px-8">
      <PageTitle title="Favourites" />

      <Wishlist />
    </div>
  );
};

export default WishlistPage;
