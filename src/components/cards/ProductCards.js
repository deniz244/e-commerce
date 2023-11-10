import React from "react";
import { products } from "../../data/products";

export default function ProductCards() {
  //repeated -> BestsellerProducts ProductBestseller

  return (
    <div className="flex items-start ml-14">
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
                <h5 className="font-['Montserrat', sans-serif] text-[#BDBDBD] text-base font-bold text-center leading-6 tracking-[0.1px] ml-9">
                  ${product.oldPrice}
                </h5>
                <h5 className="font-['Montserrat', sans-serif] text-[#23856D] text-base font-bold text-center leading-6 tracking-[0.1px] ">
                  ${product.price}
                </h5>
              </div>
              <div className="flex gap-[6.08px] ml-12">
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
  );
}
