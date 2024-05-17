import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
} from "../features/cart/cartSlice";
import { Product } from "../utils/types";
import { PiMinusSquareFill, PiPlusSquareFill } from "react-icons/pi";

interface Props {
  product: Product;
  color: string;
}

const QuantityControlPanel: React.FC<Props> = ({ product, color }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  function handleIncreaseItemQTY(item: Product) {
    dispatch(setIncreaseItemQTY(item));
  }

  function handleDecreaseItemQTY(item: Product) {
    dispatch(setDecreaseItemQTY(item));
  }

  return (
    <div className="flex items-center justify-between">
      <button
        className={`rounded-md ${color} transition-all duration-200`}
        title="decrease quantity"
        type="button"
        onClick={() => handleDecreaseItemQTY(product)}
      >
        <PiMinusSquareFill size={32} />
      </button>

      <span>
        {
          cartItems[cartItems.findIndex((item) => item.id === product.id)]
            .cartQuantity
        }
      </span>

      <button
        className={`rounded-md ${color} transition-all duration-200`}
        type="button"
        title="increase quantity"
        onClick={() => handleIncreaseItemQTY(product)}
      >
        <PiPlusSquareFill size={32} />
      </button>
    </div>
  );
};

export default QuantityControlPanel;
