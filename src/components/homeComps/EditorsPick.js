import React from "react";
import ePic1 from "./../../assets/editorsPick/ePick1.png";
import ePic2 from "./../../assets/editorsPick/ePick2.png";
import ePic3 from "./../../assets/editorsPick/ePick3.png";
import ePic4 from "./../../assets/editorsPick/ePick4.png";

export default function EditorsPick() {
  return (
    <div className="flex pl-[195px] pr-[195px] justify-center items-center self-stretch bg-[#FFFFFF]">
      <div className="flex flex-col pt-20 pb-20 items-center gap-12 ">
        <div className="flex flex-col w-auto items-center gap-2.5">
          <div className="font-['Montserrat', sans-serif] text-[#252B42] text-2xl font-bold leading-8 tracking-wider">
            <h3>EDITOR’S PICK</h3>
          </div>
          <div className="font-['Montserrat', sans-serif] text-[#737373] text-sm font-normal leading-5 tracking-[0.2px]">
            <p>Problems trying to resolve the conflict between </p>
          </div>
        </div>

        <div className="flex items-start gap-[30px]">
          <div className="shrink-0 h-[500px] w-[509px]">
            <img src={ePic1} alt="men with hat"></img>
            <div className="flex justify-center items-center pb-3 pt-3 w-[170px]">
              <div className="text-center font-['Montserrat', sans-serif] text-base text-[#252B42] font-bold leading-6 tracking-[0.1px]">
                <h2>MEN</h2>
              </div>
            </div>
          </div>

          <div className="shrink-0 h-[500px] w-[239px]">
            <img src={ePic2} alt="women"></img>
            <div className="flex justify-center items-center pb-3 pt-3 w-[170px]">
              <div className="text-center font-['Montserrat', sans-serif] text-base text-[#252B42] font-bold leading-6 tracking-[0.1px]">
                <h2>WOMEN</h2>
              </div>
            </div>
          </div>

          <div className=" flex flex-col shrink-0 h-[500px] w-[239px] gap-4">
            <div className="shrink-0 w-[239px] h-[242px]">
              <img src={ePic3} alt="accessories"></img>
              <div className="flex items-start w-[170px] pb-3 pt-3 pl-[26px] pr-[26px] gap-2.5">
                <div className="text-center font-['Montserrat', sans-serif] text-base text-[#252B42] font-bold leading-6 tracking-[0.1px]">
                  <h5>ACCESSORIES</h5>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-[239px] h-[242px]">
              <img src={ePic4} alt="accessories"></img>
              <div className="flex items-start w-[170px] pb-3 pt-3 pl-[26px] pr-[26px] gap-2.5">
                <div className="text-center font-['Montserrat', sans-serif] text-base text-[#252B42] font-bold leading-6 tracking-[0.1px]">
                  <h5>KIDS</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
