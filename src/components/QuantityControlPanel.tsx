import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
} from "../features/cart/CartSlice";
import { product } from "../utils/types";
import { PiMinusSquareFill, PiPlusSquareFill } from "react-icons/pi";

interface props {
  product: product;
  color: string;
}

const QuantityControlPanel: React.FC<props> = (props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  function handleIncreaseItemQTY(item: product) {
    dispatch(setIncreaseItemQTY(item));
  }

  function handleDecreaseItemQTY(item: product) {
    dispatch(setDecreaseItemQTY(item));
  }

  return (
    <div className="flex items-center justify-between">
      <button
        className={`rounded-md ${props.color} transition-all duration-200`}
        type="button"
        title="increase quantity"
        onClick={() => handleIncreaseItemQTY(props.product)}
      >
        <PiPlusSquareFill size={32} />
      </button>

      <span>
        {
          cartItems[
            cartItems.findIndex(
              (item) => item.id === props.product.id,
            )
          ].cartQuantity
        }
      </span>

      <button
        className={`rounded-md ${props.color} transition-all duration-200`}
        title="decrease quantity"
        type="button"
        onClick={() => handleDecreaseItemQTY(props.product)}
      >
        <PiMinusSquareFill size={32} />
      </button>
    </div>
  );
};

export default QuantityControlPanel;
