import React from "react";
import { Carousel } from "@material-tailwind/react";

export default function ProductCard() {
  return (
    <div className="bg-[#FAFAFA] w-full">
      <div className=" pb-12 w-[1050px] mx-auto">
        <div className=" flex gap-[30px] p-3 ">
          <div className="w-full  ">
            <div className="flex flex-col gap-4 rounded">
              <Carousel
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer transition-all content-[''] z-50 ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className=" w-[506px] h-[450px]"
                />
                <img
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="image 2"
                  className=" w-[506px] h-[450px]"
                />
              </Carousel>
              <div className="flex gap-4 ">
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className="opacity-50 w-24 h-[75px]"
                ></img>
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className="opacity-50 w-24 h-[75px]"
                ></img>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7 w-full ">
            <h4 className="font-['Montserrat', sans-serif] font-normal text-xl text-[#252B42] leading-[30px] tracking-[0.2px]">
              Floating Phone
              {/*products?.name*/}
            </h4>
            <div className="flex gap-2">
              <i className="bx bx-star text-[#F3CD03]"></i>
              <h6 className="font-bold text-xs text-[#737373]">
                {/*products.rating*/} 10 Rewievs
              </h6>
            </div>
            <h5 className="text-2xl font-bold text-[#252B42] leading-[32px] tracking-[0.1px]">
              {/*products.price*/}
              $1,139.33
            </h5>
            <div className="flex gap-1">
              <p className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px]">
                Availability:
              </p>
              <p className="text-[#23A6F0] font-bold text-sm leading-[24px] tracking-[0.2px]">
                {/*products.stock > 0 ? "In Stock" : "No Stock"*/}
                In Stock
              </p>
            </div>
            <p className="text-[#737373] font-normal text-sm w-[340px] leading-[20px] tracking-[0.2px]">
              {/*products.description*/}
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <hr className="text-[#BDBDBD] border border-1" />
            <div className="flex gap-[10px]">
              <button>
                <i class="bx bxs-circle text-3xl text-[#23A6F0]"></i>
              </button>
              <button>
                <i class="bx bxs-circle text-3xl text-[#23856D]"></i>
              </button>
              <button>
                <i class="bx bxs-circle text-3xl text-[#E77C40]"></i>
              </button>
              <button>
                <i class="bx bxs-circle text-3xl text-[#252B42]"></i>
              </button>
            </div>
            <div className="flex gap-[10px]">
              <button className="bg-[#23A6F0] py-[10px] px-5 font-bold text-sm text-white rounded">
                Select Options
              </button>
              <i class="bx bx-heart border border-1 rounded-full text-3xl w-10 text-center text-[#252B42]"></i>
              <i class="bx bx-cart border border-1 rounded-full text-3xl w-10 text-center text-[#252B42]"></i>
              <i class="bx bx-bullseye border border-1 rounded-full text-3xl w-10 text-center text-[#252B42]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /*

  import { products } from "../../data/products";
        <div className="w-full  ">
            <div className="flex flex-col gap-4 rounded">

            //BURASIII DOKÜMANTASYONDAN
              <Carousel
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer transition-all content-[''] z-50 ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
              //BURASIII FARLIIII
                {products?.image?.map((img, i) => (
                  <img src={img} alt={i} className=" w-[506px] h-[450px]" />
                ))}
              </Carousel>
              <div className="flex gap-4 ">

              //BURASIIII FARKLIII
                {products?.image?.map((img, i) => (
                  <img src={img} className="opacity-50 w-24 h-[75px]"></img>
              </div>
            </div>
        </div> */
}
