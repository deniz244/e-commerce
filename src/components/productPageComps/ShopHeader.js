import React from "react";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

export default function ShopHeader() {
  return (
    <div className="flex  pb-6 pt-6 bg-[#FAFAFA] items-center">
      <div className="flex justify-between items-center gap-[30px]">
        <div className="flex items-start text-[#252B42] text-2xl font-bold leading-8 tracking-[0.1px] font-['Montserrat', sans-serif] ml-20 mr-80">
          <h3>Shop</h3>
        </div>
        <div className="flex items-start text-[#252B42] text-sm font-bold leading-8 tracking-[0.1px] font-['Montserrat', sans-serif] gap-4 pb-2.5 pt-2.5 ml-80 ">
          <Link to="/">Home</Link>
          <HiChevronRight className="text-[#BDBDBD] text-2xl font-thin pt-1" />
          <h3 className="text-[#BDBDBD] text-sm font-bold leading-6 tracking-[0.2px] font-['Montserrat', sans-serif] pt-1">
            Shop
          </h3>
        </div>
      </div>
    </div>
  );
}
