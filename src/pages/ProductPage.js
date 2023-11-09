import React from "react";
import Header from "../layout/Header";
import ProductCard from "../components/productPageComps/ProductCard";
import ProductDescription from "../components/productPageComps/ProductDescription";

export default function ProductPage() {
  return (
    <div>
      <Header />
      <ProductCard />
      <ProductDescription />
    </div>
  );
}
