import React from "react";
import Products from "../features/products/Products";
import PageTitle from "../components/PageTitle";

const ProductsPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 md:max-w-[1684px] lg:px-8">
      <PageTitle title="Products" />
      
      <Products />
    </div>
  );
};

export default ProductsPage;
