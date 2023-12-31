import React from "react";

export default function AboutStats() {
  return (
    <div className="flex items-center justify-evenly text-center py-20">
      <div>
        <p className="font-bold  text-[58px] text-[#252B42]">15K</p>
        <p className="font-bold  text-base text-[#737373]">Happy Customers</p>
      </div>
      <div>
        <p className="font-bold  text-[58px] text-[#252B42]">150K</p>
        <p className="font-bold  text-base text-[#737373]">Monthly Visitors</p>
      </div>
      <div>
        <p className="font-bold  text-[58px] text-[#252B42]">15</p>
        <p className="font-bold  text-base text-[#737373]">
          Countries Worldwide
        </p>
      </div>
      <div>
        <p className="font-bold  text-[58px] text-[#252B42]">100+</p>
        <p className="font-bold  text-base text-[#737373]">Top Partners</p>
      </div>
    </div>
  );
}
