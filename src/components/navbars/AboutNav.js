import React from "react";
import { Link } from "react-router-dom";
import rArrow from "../../assets/aboutPage/aboutNav/arrow-right .icn-xs.svg";

export default function AboutNav() {
  return (
    <div className="flex h-20 bg-[#FFFFFF] pt-4 pb-4 items-start flex-col gap-3 pl-20 ml-14">
      <div className="flex h-14 w-auto justify-end items-start gap-10 font-['Montserrat', sans-serif] ">
        <div className="flex items-center py-3 pl-9 pr-20 text-2xl font-bold leading-8 tracking-wider text-[#252B42]">
          <h3>Bandage</h3>
        </div>

        <div className="flex px-0 py-5 justify-center gap-96">
          <div className="flex flex-row items-start gap-3.5 text-sm text-[#737373] font-bold tracking-widest">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="flex flex-row pl-24  text-[#23A6F0]">
            <div className="flex pr-5 p-15 items-center gap-[45px] text-sm font-bold tracking-widest ">
              <Link to="/login">Login</Link>

              <Link
                to="/signup"
                className="flex bg-[#23A6F0] rounded text-white pt-[15px] pb-[15px] pl-[25px] pr-[25px] text-sm w-[220px] m-auto "
              >
                Become a member
                <span className="pl-2">
                  <img src={rArrow} alt="right arrow" className="pt-1"></img>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
