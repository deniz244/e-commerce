import React from "react";
import phone from "./../../assets/phone.svg";
import mail from "./../../assets/mail.svg";
import insta from "./../../assets/insta.svg";
import yt from "./../../assets/youtube.svg";
import fb from "./../../assets/facebook.svg";
import tw from "./../../assets/twitter.svg";

export default function DarkNav() {
  return (
    <div className="flex bg-[#252B42] h-11 py-6 px-3 justify-center items-center font-['Montserrat', sans-serif] text-sm text-[#FFFFFF] font-bold leading-6 tracking-widest">
      <div className="flex w-auto px-6 items-start justify-between shrink-0">
        <div className="flex gap-2.5">
          <div className="flex pt-10 pb-10 items-center gap-1">
            <img src={phone} alt="phoneImg"></img>
            <h6>(225) 555-0118</h6>
          </div>

          <div className="flex p-10 items-center gap-1">
            <img src={mail} alt="mailImg"></img>
            <h6>michelle.rivera@example.com</h6>
          </div>
        </div>

        <div className="flex p-10 gap-2.5 items-start">
          <h6> Follow Us and get a chance to win 80% off </h6>
        </div>

        <div className="flex p-10 gap-2.5 items-start">
          <h6> Follow Us :</h6>
          <div className="flex p-1 items-start gap-2.5">
            <img src={insta} alt="instaImg"></img>
            <img src={yt} alt="youtubeImg"></img>
            <img src={fb} alt="faceBookImg"></img>
            <img src={tw} alt="twitterImg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
