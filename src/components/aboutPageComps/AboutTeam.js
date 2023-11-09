import React from "react";
import { teamData } from "../../data/teamData";

export default function AboutTeam() {
  return (
    <div>
      <div className="flex flex-col gap-28 text-[#252B42]  font-['Montserrat', sans-serif] text-center items-center py-28">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[40px]">Meet Our Team</h1>
          <h6 className="font-normal text-[#737373] text-sm w-[469px] m-auto leading-[20px] tracking-[0.2px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </h6>
        </div>
        <div className="flex gap-6  ">
          {teamData.map((data) => (
            <div className="w-[316px] m-auto font-bold">
              <img
                className="w-[316px] h-[231px]"
                src={data.img}
                alt="team member pic"
              ></img>
              <div className="flex flex-col gap-[10px] p-[30px]">
                <h5 className="text-base">{data.header}</h5>
                <h6 className="text-sm">{data.role}</h6>
                <div className="flex gap-5 justify-center text-[#23A6F0]">
                  <a href={data.facebook}>
                    {" "}
                    <i class="bx bxl-facebook-circle text-2xl"></i>
                  </a>
                  <a href={data.instagram}>
                    {" "}
                    <i class="bx bxl-instagram text-2xl"></i>
                  </a>
                  <a href={data.twitter}>
                    {" "}
                    <i class="bx bxl-twitter text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
