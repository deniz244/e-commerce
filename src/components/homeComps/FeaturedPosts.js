import { NavLink } from "react-router-dom";
import img1 from "./../../assets/featuredPosts/img1.png";
import img2 from "./../../assets/featuredPosts/img2.png";
import img3 from "./../../assets/featuredPosts/img3.png";

export default function FeaturedPosts() {
  return (
    <div className="font-['Montserrat', sans-serif] pb-16">
      <div className="container m-auto ">
        <div className="text-center py-16">
          <h6 className="text-[#23A6F0] font-bold text-sm font-['Montserrat', sans-serif]">
            Practice Advice
          </h6>
          <h3 className="font-bold text-[40px] text-[#252B42] font-['Montserrat', sans-serif]">
            Featured Posts
          </h3>
          <p className="text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
          <p className="text-[#737373]">
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex gap-4 pl-40">
          <div className="relative shadow-xl">
            <img className=" w-[348px] h-[300px]" src={img1}></img>
            <p className="absolute top-5 left-5 font-bold text-sm px-[10px] text-[#FFFFFF] bg-[#E74040] shadow-sm">
              NEW
            </p>
            <div className="pt-[25px] pr-[15px] pb-[35px] pl-[15px] flex flex-col gap-4  w-[300px] m-auto">
              <div className="flex gap-4">
                <p className="text-[#8EC2F2] font-normal text-xs">Google</p>
                <p className="text-[#737373] font-normal text-xs">Trending</p>
                <p className="text-[#737373] font-normal text-xs">New</p>
              </div>
              <h4 className="font-normal text-xl text-[#252B42]">
                Loudest à la Madison #1 (L'integral)
              </h4>
              <p className="font-normal text-xs text-[#737373]">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between">
                <div className="font-normal text-xs text-[#737373]">
                  <i className="bx bx-alarm text-[#23A6F0]"></i>
                  22 April 2021
                </div>
                <div className="font-normal text-xs text-[#737373]">
                  <i className="bx bx-line-chart text-[#23856D]"></i>
                  10 comments
                </div>
              </div>
              <NavLink
                to="/feature-posts/detail"
                className="flex font-bold text-sm text-[#737373] items-center "
              >
                Learn More
                <i className="bx bx-chevron-right text-[#23A6F0] text-2xl "></i>
              </NavLink>
            </div>
          </div>
          <div className="relative shadow-xl">
            <img className=" w-[348px] h-[300px]" src={img2}></img>
            <p className="absolute top-5 left-5 font-bold text-sm px-[10px] text-[#FFFFFF] bg-[#E74040] shadow-sm">
              NEW
            </p>
            <div className="pt-[25px] pr-[15px] pb-[35px] pl-[15px] flex flex-col gap-4  w-[300px] m-auto">
              <div className="flex gap-4">
                <p className="text-[#8EC2F2] font-normal text-xs">Google</p>
                <p className="text-[#737373] font-normal text-xs">Trending</p>
                <p className="text-[#737373] font-normal text-xs">New</p>
              </div>
              <h4 className="font-normal text-xl text-[#252B42]">
                Loudest à la Madison #1 (L'integral)
              </h4>
              <p className="font-normal text-xs text-[#737373]">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between">
                <div className="font-normal text-xs text-[#737373]">
                  <i className="bx bx-alarm text-[#23A6F0]"></i>
                  22 April 2021
                </div>
                <div className="font-normal text-xs text-[#737373]">
                  <i className="bx bx-line-chart text-[#23856D]"></i>
                  10 comments
                </div>
              </div>
              <NavLink
                to="/feature-posts/detail"
                className="flex font-bold text-sm text-[#737373] items-center "
              >
                Learn More
                <i className="bx bx-chevron-right text-[#23A6F0] text-2xl "></i>
              </NavLink>
            </div>
          </div>
          <div className="relative shadow-xl">
            <img className=" w-[348px] h-[300px]" src={img3}></img>
            <p className="absolute top-5 left-5 font-bold text-sm px-[10px] text-[#FFFFFF] bg-[#E74040] shadow-sm">
              NEW
            </p>
            <div className="pt-[25px] pr-[15px] pb-[35px] pl-[15px] flex flex-col gap-4  w-[300px] m-auto">
              <div className="flex gap-4">
                <p className="text-[#8EC2F2] font-normal text-xs">Google</p>
                <p className="text-[#737373] font-normal text-xs">Trending</p>
                <p className="text-[#737373] font-normal text-xs">New</p>
              </div>
              <h4 className="font-normal text-xl text-[#252B42]">
                Loudest à la Madison #1 (L'integral)
              </h4>
              <p className="font-normal text-xs text-[#737373]">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between">
                <div className="font-normal text-xs text-[#737373]">
                  <i className="bx bx-alarm text-[#23A6F0]"></i>
                  22 April 2021
                </div>
                <div className="font-normal text-xs text-[#737373]">
                  <i className="bx bx-line-chart text-[#23856D]"></i>
                  10 comments
                </div>
              </div>
              <NavLink
                to="/feature-posts/detail"
                className="flex font-bold text-sm text-[#737373] items-center "
              >
                Learn More
                <i className="bx bx-chevron-right text-[#23A6F0] text-2xl "></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
