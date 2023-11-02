import React from "react";
import { Link } from "react-router-dom";
import userIcon from "./../../assets/user.svg";
import cart from "./../../assets/sepet.svg";
import fav from "./../../assets/kalp.svg";
import ara from "./../../assets/büyütec.svg";

export default function LightNav() {
  return (
    <div className="flex h-20 bg-[#FFFFFF] pb-0 items-start flex-col gap-3 pl-20">
      <div className="flex h-14 w-auto justify-end items-start gap-10 font-['Montserrat', sans-serif] ">
        <div className="flex items-center py-3 pl-9 pr-20 text-2xl font-bold leading-8 tracking-wider text-[#252B42]">
          <h3>Bandage</h3>
        </div>

        <div className="flex px-0 py-5 justify-center gap-96">
          <div className="flex flex-row items-start gap-3.5 text-sm text-[#737373] font-bold tracking-widest">
            <Link to="/">Home</Link>
            <Link to="/shopping">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/pages">Pages</Link>
          </div>

          <div className="flex flex-row pl-24  text-[#23A6F0]">
            <div className="flex pr-5 p-15 items-center gap-1 text-sm font-bold tracking-widest ">
              <div className="w-3 h-3">
                <img src={userIcon} alt="userIcon"></img>
              </div>
              <Link to="/login">Login / Register</Link>
            </div>

            <div className="flex gap-3.5 pl-6">
              <div className="w-4 h-4">
                <img src={ara} alt="aramaIcon"></img>
              </div>
              <div className="flex w-4 h-4 text-sm font-normal gap-1">
                <img src={cart} alt="sepetIcon"></img>
                <p>1</p>
              </div>
              <div className="flex w-4 h-4 text-sm font-normal gap-1">
                <img src={fav} alt="kalpIcon"></img>
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
