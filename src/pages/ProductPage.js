import React from "react";
import Header from "../layout/Header";
import ProductCard from "../components/productPageComps/ProductCard";
import ProductDescription from "../components/productPageComps/ProductDescription";
import ProductBestSeller from "../components/productPageComps/ProductBestSeller";

export default function ProductPage() {
  return (
    <div>
      <Header />
      <ProductCard />
      <ProductDescription />
      <ProductBestSeller />
    </div>
  );
}
