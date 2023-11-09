import React from "react";
import bgImg from "../../assets/aboutPage/unsplash_vjMgqUkS8q8.png";
import { Link } from "react-router-dom";

export default function AboutTestimonial() {
  return (
    <div className="bg-[#2A7CC7] h-[637px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-6 w-[500px] py-28 m-auto text-white">
          <h5 className="font-bold font-['Montserrat', sans-serif] leading-[24px] tracking-[0.1px] text-base">
            WORK WITH US
          </h5>
          <h2 className="font-['Montserrat', sans-serif] font-bold text-[40px] leading-[50px] tracking-[0.2px]">
            Now Let’s grow Yours
          </h2>
          <p className="font-['Montserrat', sans-serif] leading-[20px] tracking-[0.2px] font-normal text-sm ">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <Link
            to="/contact"
            className="py-[15px] w-[130px] rounded-md border border-1 border-[#FAFAFA] text-center text-[#FAFAFA] font-['Montserrat', sans-serif] leading-[22px] tracking-[0.2px]"
          >
            Contact
          </Link>
        </div>
        <div>
          <img className="w-[590px] h-[640px]" src={bgImg}></img>
        </div>
      </div>
    </div>
  );
}
