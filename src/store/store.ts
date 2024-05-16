import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import wishlistSlice from "../features/wishlist/wishlistSlice";
import currencySlice from "../features/currencyConverter/currencySlice";

const rootReducer = combineReducers({
  currency: currencySlice,
  wishlist: wishlistSlice,
  cart: cartSlice,
});

const Store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default Store;
