import React from "react";
import { useDispatch } from "react-redux";
import { setRemoveItemFromCart } from "./CartSlice";
import QuantityControlPanel from "../../components/QuantityControlPanel";

interface props {
  cartItem: {
    name: string;
    image: string;
    id: string;
    price_string: string;
    currency: string;
    price: number;
    cartQuantity: number;
  };
}

const CartItem: React.FC<props> = (props) => {
  const dispatch = useDispatch();

  function handleRemoveItemFromCart() {
    dispatch(setRemoveItemFromCart(props.cartItem));
  }

  return (
    <li key={props.cartItem.id} className="flex py-6">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-md border border-gray-200">
        <img
          src={props.cartItem.image}
          alt={props.cartItem.name}
          className="object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col py-0.5">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{props.cartItem.name}</h3>
            <p className="ml-4">
              ${props.cartItem.price * props.cartItem.cartQuantity}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Price / Qty:
            <span className="font-medium text-gray-600">
              {" "}
              €{props.cartItem.price}
            </span>
          </p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="w-24">
            <QuantityControlPanel
              product={props.cartItem}
              color="text-indigo-500 hover:text-indigo-600"
            />
          </div>

          <button
            type="button"
            className="font-medium text-red-500 transition-colors duration-200 hover:text-red-400"
            onClick={() => handleRemoveItemFromCart()}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};


export default CartItem;
