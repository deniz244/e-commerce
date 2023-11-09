import React from "react";
import { products } from "../../data/products";
import Pagination from "./Pagination";

export default function ShopProducts() {
  return (
    <div className="container m-auto ">
      <div className="flex flex-wrap m-auto w-[1004px] ">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex flex-col p-2 m-auto text-center gap-2"
          >
            <img src={p.image} className="py-2 h-[250px]"></img>
            <h5 className="pb-3 text-center font-bold text-base">{p.title}</h5>
            <a
              href=""
              className="pb-3 font-bold text-sm text-[#737373] text-center"
            >
              {p.department}
              <div className="pt-3">
                <span className="text-[#BDBDBD] text-base ">${p.oldPrice}</span>
                <span className="text-[#23856D] text-base ">${p.price}</span>
              </div>{" "}
            </a>
            <div>
              <button>
                <i class="bx bxs-circle text-[#23A6F0]"></i>
              </button>
              <button>
                <i class="bx bxs-circle text-[#23856D]"></i>
              </button>
              <button>
                <i class="bx bxs-circle text-[#E77C40]"></i>
              </button>
              <button>
                <i class="bx bxs-circle text-[#252B42]"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
}
