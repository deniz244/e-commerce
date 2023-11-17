import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function LightNav() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white ">
      <div className="mobile-col-flex  sm:justify-between fixed-width sm:mx-auto  sm:px-0 py-4 sm:h-14 ">
        <div>
          <NavLink to="/" exact className="font-bold text-2xl px-4 sm:px-0">
            Bandage
          </NavLink>
        </div>
        <div className="w-[414px] sm:fixed-width mobile-col-flex text-gap text-[#737373] font-bold text-[30px] sm:text-sm items-center py-4 sm:py-0">
          <NavLink to="/" className="" exact>
            Home
          </NavLink>
          <div className="flex items-center">
            <NavLink to="/shopping" className="">
              Shop
            </NavLink>
            <div class="relative inline-block text-left">
              <div className="flex items-center">
                <button
                  onClick={() => setToggle(!toggle)}
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-white text-sm  text-[#737373] font-bold hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <svg
                    class="-mr-1 h-10 w-10 sm:h-5 sm:w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {toggle && (
                <div
                  class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Dress
                    </a>
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Skirt
                    </a>
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      T-shirt
                    </a>
                    <form method="POST" action="#" role="none">
                      <button
                        type="submit"
                        class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-3"
                      >
                        Home Decoration
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
          <NavLink to="/about" className="" exact>
            About
          </NavLink>
          <NavLink to="/blog" className="" exact>
            Blog
          </NavLink>
          <NavLink to="/contact" className="" exact>
            Contact
          </NavLink>
          <NavLink to="/pages" exact>
            Pages
          </NavLink>
          <NavLink to="/product" exact>
            Product
          </NavLink>
          <NavLink to="/pricing" exact>
            Pricing
          </NavLink>
          <NavLink to="/teams" className="" exact>
            Teams
          </NavLink>
        </div>

        <div className="mobile-col-flex items-center gap-4 text-[#23A6F0] font-bold text-sm">
          <NavLink to="/login" exact className="flex items-center">
            <box-icon
              name="user"
              color="#23a6f0"
              className="w-3 h-3"
            ></box-icon>{" "}
            Login / Register
          </NavLink>
          <button className="flex items-center ">
            <box-icon name="search" color="#23a6f0"></box-icon>
          </button>
          <NavLink to="/cart" exact className="flex items-center">
            <box-icon
              name="cart"
              color="#23a6f0"
              className="w-3 h-3"
            ></box-icon>{" "}
            1
          </NavLink>
          <NavLink to="/favorites" exact className="flex items-center">
            <box-icon
              name="heart"
              color="#23a6f0"
              className="w-3 h-3"
            ></box-icon>{" "}
            1
          </NavLink>
        </div>
      </div>
    </div>
  );
}

/*
 <NavLink to="/about" className="" exact>
            About
          </NavLink>
          <NavLink to="/blog" className="" exact>
            Blog
          </NavLink>
          <NavLink to="/contact" className="" exact>
            Contact
          </NavLink>
          <NavLink to="/pages" exact>
            Pages
          </NavLink>
          <NavLink to="/product" exact>
            Product
          </NavLink>
          <NavLink to="/pricing" exact>
            Pricing
          </NavLink>
          <NavLink to="/teams" className="" exact>
            Teams
          </NavLink>
*/

/*
import userIcon from "./../../assets/user.svg";
import cart from "./../../assets/sepet.svg";
import fav from "./../../assets/kalp.svg";
import ara from "./../../assets/büyütec.svg";
*/

/*
<div className="flex h-24 bg-[#FFFFFF] pb-0 items-start flex-col gap-3 pl-20 pt-3">
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
            <Link to="/product">Product</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/teams">Teams</Link>
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


*/
