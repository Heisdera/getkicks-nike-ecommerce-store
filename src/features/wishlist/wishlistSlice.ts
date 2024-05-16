import { createSlice } from "@reduxjs/toolkit";
import { toast as toast1 } from "react-hot-toast";
import { toast as toast2 } from "react-toastify";
import { RootState } from "../../store/store";

const initialState: {
  wishlistState: boolean;
  wishlistItems: {
    name: string;
    image: string;
    id: string;
    price_string: string;
    currency: string;
    price: number;
  }[];
} = {
  wishlistState: false,
  // wishlistItems: [],
  wishlistItems: localStorage.getItem("nike-sneakers-wish-list")
    ? JSON.parse(localStorage.getItem("nike-sneakers-wish-list")!)
    : [],
};

const wishlistSlice = createSlice({
  initialState,
  name: "wishlist",
  reducers: {
    setToggleWishlistState: (state) => {
      state.wishlistState = !state.wishlistState;
    },
    setAddItemToWishlist: (state, action) => {
      const itemIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (itemIndex >= 0) {
        toast1.success(`${action.payload.name} already in Wishlist`);
        toast2.success(`${action.payload.name} already in Wishlist`);
      } else {
        const newItem = action.payload;
        state.wishlistItems.push(newItem);
        toast1.success(`${action.payload.name} added to Wishlist`);
        toast2.success(`${action.payload.name} added to Wishlist`);
      }

      localStorage.setItem(
        "nike-sneakers-wish-list",
        JSON.stringify(state.wishlistItems),
      );
    },
    setRemoveItemFromWishlist: (state, action) => {
      const filteredWishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id,
      );
      state.wishlistItems = filteredWishlistItems;

      localStorage.setItem(
        "nike-sneakers-wish-list",
        JSON.stringify(state.wishlistItems),
      );

      toast1.success(`${action.payload.name} removed from Wishlist`);
      toast2.success(`${action.payload.name} removed from Wishlist`);
    },
    setToggleWishlistItem: (state, action) => {
      const newWishlistItem = action.payload;
      const itemIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      const filteredWishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id,
      );

      if (itemIndex >= 0) {
        state.wishlistItems = filteredWishlistItems;
        toast1.success(`${action.payload.name} removed from Wishlist`);
        toast2.success(`${action.payload.name} removed from Wishlist`);
      } else {
        state.wishlistItems.push(newWishlistItem);
        toast1.success(`${action.payload.name} added to Wishlist`);
        toast2.success(`${action.payload.name} added to Wishlist`);
      }

      localStorage.setItem(
        "nike-sneakers-wish-list",
        JSON.stringify(state.wishlistItems),
      );
    },
    setClearWishlistItems: (state) => {
      if (state.wishlistItems.length > 0) {
        state.wishlistItems = [];
        toast1.success("Wishlist Cleared");
        toast2.success("Wishlist Cleared");

        localStorage.setItem(
          "nike-sneakers-wish-list",
          JSON.stringify(state.wishlistItems),
        );
      } else {
        toast1.success("Nothing in Wishlist");
        toast2.success("Nothing in Wishlist");
      }
    },
  },
});

export const selectWishlistState = (state: RootState) =>
  state.wishlist.wishlistState;
export const selectWishlistItems = (state: RootState) =>
  state.wishlist.wishlistItems;
export const selectWishlistTotalItems = (state: RootState) =>
  state.wishlist.wishlistItems.length;

export const {
  setToggleWishlistState,
  setAddItemToWishlist,
  setRemoveItemFromWishlist,
  setToggleWishlistItem,
  setClearWishlistItems,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
