import React from "react";
import shoppingW from "../../assets/aboutPage/aboutUs/shoppingWomen.png";

export default function AboutUs() {
  return (
    <div className="flex items-center justify-between py-28">
      <div className="flex flex-col gap-[35px] w-[356px] ml-40 font-['Montserrat', sans-serif]">
        <h5 className="text-[#252B42] text-base font-bold">ABOUT COMPANY</h5>
        <h1 className="text-[#252B42] text text-[58px] font-bold">ABOUT US</h1>
        <p className="text-[#737373] text-[20px] leading-[30px] tracking-[0.2px]">
          We know how large objects will act, but things on a small scale
        </p>
        <button className="w-[190px] text-sm font-bold text-white py-[15px] px-10 bg-[#23A6F0]">
          Get Quote Now
        </button>
      </div>
      <div className="relative z-0 mr-40">
        <div className="relative z-0 bg-[#FFE9EA] rounded-[100%]  p-52"></div>
        <div className="absolute top-0 bg-[#FFE9EA] rounded-[100%] p-6"></div>
        <div className="absolute bg-[#977DF4] rounded-[100%] p-2"></div>
        <div className="absolute right-0 top-0 bg-[#977DF4] rounded-[100%] p-2"></div>
        <img
          src={shoppingW}
          alt="shopping women"
          className="absolute top-0 left-6"
        ></img>
      </div>
    </div>
  );
}
