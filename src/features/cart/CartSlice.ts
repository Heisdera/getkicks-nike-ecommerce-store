import { createSlice } from "@reduxjs/toolkit";
import { toast as toast1 } from "react-hot-toast";
import { toast as toast2 } from "react-toastify";
import { RootState } from "../../store/store";

const initialState: {
  cartState: boolean;
  cartItems: {
    name: string;
    image: string;
    id: string;
    price_string: string;
    currency: string;
    price: number;
    cartQuantity: number;
  }[];
} = {
  cartState: false,
  // cartItems: [],
  cartItems: localStorage.getItem("nike-sneakers-cart")
    ? JSON.parse(localStorage.getItem("nike-sneakers-cart")!)
    : [],
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setToggleCartState: (state) => {
      state.cartState = !state.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast1.success(`${action.payload.name} QTY Increased`);
        toast2.success(`${action.payload.name} QTY Increased`);
      } else {
        const newItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(newItem);
        toast1.success(`${action.payload.name} added to cart`);
        toast2.success(`${action.payload.name} added to cart`);
      }

      localStorage.setItem(
        "nike-sneakers-cart",
        JSON.stringify(state.cartItems),
      );
    },
    setRemoveItemFromCart: (state, action) => {
      const filteredCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
      state.cartItems = filteredCartItems;

      localStorage.setItem(
        "nike-sneakers-cart",
        JSON.stringify(state.cartItems),
      );

      toast1.success(`${action.payload.name} removed from Cart`);
      toast2.success(`${action.payload.name} removed from Cart`);
    },
    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast1.success(`${action.payload.name} QTY Increased`);
        toast2.success(`${action.payload.name} QTY Increased`);
      }

      localStorage.setItem(
        "nike-sneakers-cart",
        JSON.stringify(state.cartItems),
      );
    },
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast1.success(`${action.payload.name} QTY Decreased`);
        toast2.success(`${action.payload.name} QTY Decreased`);
      }

      localStorage.setItem(
        "nike-sneakers-cart",
        JSON.stringify(state.cartItems),
      );
    },
    setClearCartItems: (state) => {
      if (state.cartItems.length > 0) {
        state.cartItems = [];
        toast1.success("Cart Cleared");
        toast2.success("Cart Cleared");

        localStorage.setItem(
          "nike-sneakers-cart",
          JSON.stringify(state.cartItems),
        );
      } else {
        toast1.success("Nothing in Cart");
        toast2.success("Nothing in Cart");
      }
    },
  },
});

export const selectCartState = (state: RootState) => state.cart.cartState;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectCartTotalQTY = (state: RootState) =>
  state.cart.cartItems.reduce((acc, cur) => {
    const totalQTY = acc + cur.cartQuantity;

    return totalQTY;
  }, 0);

export const selectCartTotalAmount = (state: RootState) =>
  state.cart.cartItems.reduce((acc, cur) => {
    const totalPrice = acc + cur.price * cur.cartQuantity;

    return totalPrice;
  }, 0);

export const {
  setToggleCartState,
  setAddItemToCart,
  setClearCartItems,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setRemoveItemFromCart,
} = CartSlice.actions;

export default CartSlice.reducer;
