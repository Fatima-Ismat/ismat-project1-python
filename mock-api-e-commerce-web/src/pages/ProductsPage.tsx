import React from 'react';
import ProductList from "@/app/components/ProductList";

const ProductPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Our Products</h1>
      {/* Yahan ProductList ko render karenge */}
      <ProductList />
    </div>
  );
};

export default ProductPage;
