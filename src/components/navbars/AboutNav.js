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
              {/*<div className="w-3 h-3">
                <img src={userIcon} alt="userIcon"></img>
                </div>*/}
              <Link to="/login">Login</Link>
              <button className="flex flex-row bg-[#23A6F0] text-white py-4 px-10 rounded-md gap-[15px]">
                Become a member
                <span>
                  <img src={rArrow} alt="right arrow" className="pt-1"></img>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
