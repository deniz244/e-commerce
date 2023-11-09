import React from "react";
import ProductCards from "../cards/ProductCards";

export default function BestsellerProducts() {
  return (
    <div className="flex flex-col justify-center items-center pl-[195px] pr-[121px]">
      <div className="flex flex-col w-[1124px] pb-20 pt-20 items-center gap-20 ">
        <div className="flex flex-col w-[691px] items-center gap-2.5">
          <div className="text-center text-[#737373] font-['Montserrat', sans-serif] text-xl font-normal leading-[30px] tracking-[0.2px]">
            <h4>Featured Products</h4>
          </div>

          <div className="text-center text-[#252B42] font-['Montserrat', sans-serif] text-2xl font-bold leading-8 tracking-[0.1px] ">
            <h3>BESTSELLER PRODUCTS</h3>
          </div>

          <div className="text-center text-[#737373] font-['Montserrat', sans-serif] text-sm font-normal leading-5 tracking-[0.2px]">
            <p>Problems trying to resolve the conflict between </p>
          </div>
        </div>

        {/*ProductCard */}
        <ProductCards />
      </div>
    </div>
  );
}
