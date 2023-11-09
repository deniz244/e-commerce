import React from "react";
import ProductCards from "../cards/ProductCards";

export default function ProductBestSeller() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col items-center ">
        <div>
          <h3 id="section-title" className="font-bold  text-2xl text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <hr className="text-[#ECECEC] py-10" />
        <ProductCards />
      </div>
    </div>
  );
}
