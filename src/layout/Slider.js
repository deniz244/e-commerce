import React, { useState } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-full relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="ImgOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="ImageTwo"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="ImageThree"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="ImageFour"
          />
        </div>
        {/*<div className="absolute inset-x-0 bottom-4 flex justify-center">
          <div
            onClick={prevSlide}
            className="w-6 h-11 flex items-center justify-center  cursor-pointer hover:bg-gray-900 hover:bg-opacity-70 transition duration-300 mr-2"
          >
            <HiChevronLeft className="text-white text-2xl" />
          </div>
          <div
            onClick={nextSlide}
            className="w-6 h-11 flex items-center justify-center  cursor-pointer hover:bg-gray-900 hover:bg-opacity-70 transition duration-300"
          >
            <HiChevronRight className="text-white text-2xl" />
          </div>
  </div>*/}

        <div className="absolute inset-11">
          <div
            onClick={prevSlide}
            className="w-14 h-14 flex items-center justify-center  cursor-pointer hover:bg-gray-900 hover:bg-opacity-70 transition duration-300 mr-2"
          >
            <HiChevronLeft className="text-white text-5xl font-thin" />
          </div>
        </div>

        <div className="absolute  ">
          <div
            onClick={nextSlide}
            className="w-14 h-14 flex items-center justify-center  cursor-pointer hover:bg-gray-900 hover:bg-opacity-70 transition duration-300"
          >
            <HiChevronRight className="text-white text-5xl font-thin" />
          </div>
        </div>
      </div>
    </div>
  );
}
