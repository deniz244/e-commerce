import React from "react";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

export default function Shop() {
  return (
    <div className="flex w-[1440px] pb-6 pt-6 bg-[#FAFAFA] items-center">
      <div className="flex justify-between items-center gap-[30px]">
        <div className="flex items-start text-[#252B42] text-2xl font-bold leading-8 tracking-[0.1px] font-['Montserrat', sans-serif] pl-20 ">
          <h3>Shop</h3>
        </div>
        <div className="flex items-start text-[#252B42] text-sm font-bold leading-8 tracking-[0.1px] font-['Montserrat', sans-serif] gap-4 pb-2.5 pt-2.5 ">
          <Link to="/">Home</Link>
          <HiChevronRight className="text-[#BDBDBD] text-2xl font-thin" />
        </div>
      </div>
    </div>
  );
}
