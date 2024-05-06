import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/cart/CartSlice";
import WishlistSlice from "../features/wishlist/WishlistSlice";

const rootReducer = combineReducers({
  cart: CartSlice,
  wishlist: WishlistSlice,
});

const Store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default Store;
