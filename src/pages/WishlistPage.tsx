import React from "react";
import { useNavigate } from "react-router-dom";
import Wishlist from "../features/wishlist/Wishlist";
import { useDispatch } from "react-redux";
import { setClearWishlistItems } from "../features/wishlist/WishlistSlice";
import PageTitle from "../components/PageTitle";
import { GoTrash } from "react-icons/go";

const WishlistPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClearWishlist() {
    dispatch(setClearWishlistItems());
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 md:max-w-[1684px] lg:px-8">
      <PageTitle title="Favourites" />

      <Wishlist />
    </div>
  );
};

export default WishlistPage;
