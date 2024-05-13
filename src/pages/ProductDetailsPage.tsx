import React from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../features/products/ProductDetails";
import { Link } from "react-router-dom";
// import { getProductDetails } from "../data/data";
import { useProductDetails } from "../hooks/useProductDetails";
import ProductDetailsSkeleton from "@/features/products/ProductDetailsSkeleton";
// import { productDetails } from "../utils/types";

const ProductDetailsPage: React.FC = () => {
  const { isLoading, error, productDetails } = useProductDetails();
  const { productId } = useParams();

  if (isLoading) return <ProductDetailsSkeleton />;

  if (error)
    return <div className="bg-red-600 text-4xl">Error fetching data</div>;

  return (
    <div>
      <Link to="/" className="text-blue-400 underline">
        &larr; Back to Products Page
      </Link>

      <ProductDetails productId={productId} productDetails={productDetails} />
    </div>
  );
};

export default ProductDetailsPage;
