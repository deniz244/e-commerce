import React from "react";
import { Link } from "react-router-dom";

import { products } from "../../data/products";

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

        <div className="flex items-start  ">
          <div className="flex flex-wrap gap-2 pl-8">
            {products.map((product) => (
              <div key={product.id}>
                <div className="w-60 h-[427px] gap-[30px]">
                  <img src={product.image} alt="best seller1"></img>
                </div>
                <div className="flex flex-col pb-9 pt-6 pl-6 pr-6 items-stretch gap-2.5">
                  <h5 className="font-['Montserrat', sans-serif] text-center text-base font-bold leading-6 tracking-[0.1px]">
                    {product.title}
                  </h5>
                  <a
                    href=""
                    className="font-['Montserrat', sans-serif] text-[#737373] text-center text-sm font-bold leading-6 tracking-[0.2px]"
                  >
                    {product.department}
                  </a>
                  <div className="flex items-start gap-[5px] pt-[5px] pb-[5px] pl-[5px] pr-[3px]">
                    <h5 className="font-['Montserrat', sans-serif] text-[#BDBDBD] text-base font-bold text-center leading-6 tracking-[0.1px]">
                      ${product.oldPrice}
                    </h5>
                    <h5 className="font-['Montserrat', sans-serif] text-[#23856D] text-base font-bold text-center leading-6 tracking-[0.1px]">
                      ${product.price}
                    </h5>
                  </div>
                  <div className="flex gap-[6.08px]">
                    <button className="bg-[#23A6F0] w-4 h-4 rounded-full"></button>
                    <button className="bg-[#23856D] w-4 h-4 rounded-full"></button>
                    <button className="bg-[#E77C40] w-4 h-4 rounded-full"></button>
                    <button className="bg-[#252B42] w-4 h-4 rounded-full"></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
