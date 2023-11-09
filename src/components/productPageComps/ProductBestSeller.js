import React from "react";
import { products } from "../../data/products";
import { Link } from "react-router-dom";

export default function ProductBestSeller() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col items-center ">
        <div>
          <h3 id="section-title" className="font-bold  text-2xl text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <hr className="text-[#ECECEC]" />
        <div className="flex flex-wrap gap-[30px]">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              className="w-[238px] h-[442px] flex flex-col"
            >
              <img src={product.image}></img>
              <div className="flex flex-col justify-start pt-[25px] pb-[35px] px-[25px] gap-[10px] bg-white">
                <h5 className="font-bold text-base text-[#252B42]">
                  {product.title}
                </h5>
                <Link
                  to="/english-department"
                  className=" font-bold text-sm text-[#737373]"
                >
                  English Department
                </Link>
                <div>
                  <span className="text-[#BDBDBD] text-base ">$6.48</span>
                  <span className="text-[#23856D] text-base ">$16.48</span>
                </div>{" "}
              </div>
            </Link>
          ))}
        </div>
        <div className="sm:hidden flex flex-col gap-[70px] w-[330px]">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} className=" flex flex-col">
              <img src={product.image}></img>
              <div className="flex flex-col justify-start pt-[25px] pb-[35px] px-[25px] gap-[10px] bg-white">
                <h5 className="font-bold text-base text-[#252B42]">
                  {product.title}
                </h5>
                <Link
                  to="/english-department"
                  className=" font-bold text-sm text-[#737373]"
                >
                  English Department
                </Link>
                <div>
                  <span className="text-[#BDBDBD] text-base ">$6.48</span>
                  <span className="text-[#23856D] text-base ">$16.48</span>
                </div>{" "}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
