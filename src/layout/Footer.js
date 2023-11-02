import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#FAFAFA] py-10 font-['Montserrat', sans-serif]">
      <div className="flex justify-between container m-auto pb-5">
        <div>
          <h3 className="font-bold text-2xl text-[#252B42] mb-2">Bandage</h3>
          <div className="flex justify-between items-center w-[100px]">
            <a href="">
              <i class="bx bxl-facebook-circle text-[#23A6F0]"></i>
            </a>
            <a>
              <i class="bx bxl-instagram text-[#23A6F0]"></i>
            </a>
            <a>
              <i class="bx bxl-twitter text-[#23A6F0]"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF]">
        <div className="flex justify-between container m-auto ">
          <div className="flex flex-col gap-4 text-base font-bold text-[#737373] py-10">
            <Link className="text-[#252B42] text-base mb-3" to="/company-info">
              Company Info
            </Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/carrier">Carrier</Link>
            <Link to="/we-are-hiring">We are hiring</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="flex flex-col gap-4 text-base font-bold text-[#737373] py-10">
            <Link className="text-[#252B42] text-base mb-3" to="/company-info">
              Legal
            </Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/carrier">Carrier</Link>
            <Link to="/we-are-hiring">We are hiring</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="flex flex-col gap-4 text-base font-bold text-[#737373] py-10">
            <Link className="text-[#252B42] text-base mb-3" to="/company-info">
              Features
            </Link>
            <Link to="/about-us">Business Marketing</Link>
            <Link to="/carrier">User Analytic</Link>
            <Link to="/we-are-hiring">Live Chat</Link>
            <Link to="/blog">Unlimited Support</Link>
          </div>
          <div className="flex flex-col gap-4 text-sm font-bold text-[#737373] py-10">
            <Link className=" text-[#252B42] text-base mb-3" to="/company-info">
              Resources
            </Link>
            <Link to="/about-us">IOS & Android</Link>
            <Link to="/carrier">Watch a Demo</Link>
            <Link to="/we-are-hiring">Customers</Link>
            <Link to="/blog">API</Link>
          </div>
          <div className="flex flex-col gap-4 text-base font-bold py-10">
            <div className=" text-[#252B42] text-base mb-3">
              Get In Touch
              <div>
                <label for="email"></label>
                <input
                  className="bg-[#F9F9F9] text-[#737373] py-4 px-10 rounded-md"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  pattern=".+@globex\.com"
                  size="30"
                  required
                />
                <button className="bg-[#23A6F0] text-white py-4 px-10 rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*düzenlenecek */}
      <div className="flex justify-between container m-auto pt-5">
        <p className="font-bold text-sm text-[#737373]">
          Made With Love By Finland All Right Reserved{" "}
        </p>

        {/*yukarı taşı */}
      </div>
    </div>
  );
}
