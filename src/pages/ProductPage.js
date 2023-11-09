import React from "react";
import Header from "../layout/Header";
import ProductCard from "../components/productPageComps/ProductCard";
import ProductDescription from "../components/productPageComps/ProductDescription";
import ProductBestSeller from "../components/productPageComps/ProductBestSeller";
import Brands from "../components/productListPageComps/Brands";
import Footer from "../layout/Footer";

export default function ProductPage() {
  return (
    <div>
      <Header />
      <ProductCard />
      <ProductDescription />
      <ProductBestSeller />
      <Brands />
      <Footer />
    </div>
  );
}
