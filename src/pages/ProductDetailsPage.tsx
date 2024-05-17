import React from "react";
import ProductDetails from "../features/products/ProductDetails";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useProductDetails } from "../hooks/useProductDetails";
import ProductDetailsSkeleton from "@/features/products/ProductDetailsSkeleton";

const ProductDetailsPage: React.FC = () => {
  const { isLoading, error, productDetails } = useProductDetails();
  const navigate = useNavigate();

  if (isLoading) return <ProductDetailsSkeleton />;

  if (error)
    return (
      <div className="mx-auto max-w-screen-xl px-4 text-4xl text-red-600">
        {error.message}
      </div>
    );

  return (
    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <button
        type="button"
        className="mt-4 flex items-end gap-1 text-lg font-medium text-gray-600 hover:text-indigo-500"
        onClick={() => navigate(-1)}
      >
        <MdOutlineKeyboardBackspace size={24} />
        Back
      </button>

      <ProductDetails productDetails={productDetails} />
    </div>
  );
};

export default ProductDetailsPage;
