import React from "react";
import Header from "../../layout/Header";
import headerImg from "../../assets/contactPage/header.png";

export default function ContactHeader() {
  return (
    <div>
      <Header />
      <div className="flex justify-between py-28">
        <div className="flex flex-col gap-[35px] w-[400px] text-[#252B42] ml-40">
          <h5 className="font-['Montserrat', sans-serif] font-bold text-base leading-[24px] tracking-[0.1px]">
            CONTACT US
          </h5>
          <h1 className="font-['Montserrat', sans-serif] font-bold text-[58px] leading-[80px] tracking-[0.2px]">
            Get in touch today!
          </h1>
          <h4 className="text-[#737373] w-[376px] leading-[30px] tracking-[0.2px]">
            We know how large objects will act, but things on a small scale{" "}
          </h4>
          <div className="flex flex-col gap-4 font-bold text-2xl">
            <p>Phone :+451 215 215</p>
            <p>Fax : +451 215 215</p>{" "}
          </div>
          <div className="flex gap-[34px] p-[10px] text-3xl text-[#252B42]">
            <a>
              <i class="bx bxl-twitter"></i>
            </a>
            <a>
              <i class="bx bxl-facebook-square"></i>
            </a>
            <a>
              <i class="bx bxl-instagram"></i>
            </a>
            <a>
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="relative z-0 mr-40">
          <div className="relative z-0 bg-[#FFE9EA] rounded-[100%]  p-52"></div>
          <div className="absolute top-0 bg-[#FFE9EA] rounded-[100%] p-6"></div>
          <div className="absolute bg-[#977DF4] rounded-[100%] p-2"></div>
          <div className="absolute right-0 top-0 bg-[#977DF4] rounded-[100%] p-2"></div>
          <img src={headerImg} className="absolute top-0 "></img>
        </div>
      </div>
    </div>
  );
}
