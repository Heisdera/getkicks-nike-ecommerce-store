import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotalAmount,
  setClearCartItems,
} from "./cartSlice";
import CartItem from "./CartItem";
import PageTitle from "../../components/PageTitle";
import { GoTrash } from "react-icons/go";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);

  function handleClearCart() {
    dispatch(setClearCartItems());
  }

  return (
    <div className="flex min-h-[calc(100vh_-_6.6rem)] flex-col justify-between">
      <div className="flex flex-col shadow-md">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="mb-8 flex items-center justify-between">
            <PageTitle title="Shopping cart" />

            <button
              title="Clear Cart"
              type="button"
              className="mr-2 text-gray-800 hover:text-gray-700"
              onClick={() => handleClearCart()}
            >
              <GoTrash size={20} strokeWidth={1} />
            </button>
          </div>

          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartItems?.map((item, i) => (
                <CartItem key={i} cartItem={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 left-0 right-0 border-t border-gray-200 bg-white px-4 py-6 drop-shadow-2xl sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>€{cartTotalAmount}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </a>
        </div>

        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <Link
            to="/products"
            role="button"
            className="animate-bounce font-medium text-indigo-600 underline hover:text-indigo-500"
          >
            or Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
