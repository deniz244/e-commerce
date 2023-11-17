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
      <div className="sm:w-[1050px] mx-auto">
        <ProductDescription />
      </div>
      <ProductBestSeller />
      <Brands />
      <Footer />
    </div>
  );
}
