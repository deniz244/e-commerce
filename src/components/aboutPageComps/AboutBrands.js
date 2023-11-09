import React from "react";
import brand1 from "../../assets/brands/fa-brands-1.png";
import brand2 from "../../assets/brands/fa-brands-2.png";
import brand3 from "../../assets/brands/fa-brands-3.png";
import brand4 from "../../assets/brands/fa-brands-4.png";
import brand5 from "../../assets/brands/fa-brands-5.png";
import brand6 from "../../assets/brands/fa-brands-6.svg";

export default function AboutBrands() {
  return (
    <div className="bg-[#FAFAFA] ">
      <div className="py-20 flex flex-col gap-6 text-center items-center">
        <div className="flex flex-col gap-[30px]">
          <h2 className="font-bold font-['Montserrat', sans-serif] text-[40px] text-[#252B42] leading-[50px] tracking-[0.2px]">
            Big Companies Are Here
          </h2>
          <p className="w-[547px] m-auto font-normal font-['Montserrat', sans-serif] text-sm text-[#737373] leading-[20px] tracking-[0.2px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex justify-center items-center py-[50px] gap-[30px]">
          <img className="w-[80px] h-[33.81px]" src={brand1}></img>
          <img className="w-[83px] h-[59px]" src={brand2}></img>
          <img className="w-[102px] h-[75px]" src={brand3}></img>
          <img className="w-[103px] h-[42px]" src={brand4}></img>
          <img className="w-[104px] h-[62px]" src={brand5}></img>
          <img className="w-[76px] h-[72px] " src={brand6}></img>
        </div>
      </div>
    </div>
  );
}
