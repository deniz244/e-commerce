import brand1 from "../../assets/brands/fa-brands-1.png";
import brand2 from "../../assets/brands/fa-brands-2.png";
import brand3 from "../../assets/brands/fa-brands-3.png";
import brand4 from "../../assets/brands/fa-brands-4.png";
import brand5 from "../../assets/brands/fa-brands-5.png";
import brand6 from "../../assets/brands/fa-brands-6.svg";

export default function Brands() {
  return (
    <div className=" py-12 bg-[#FAFAFA]">
      <div className="flex justify-center items-center  gap-[60px]">
        <img className="sm:w-[80px] sm:h-[33.81px]" src={brand1}></img>
        <img className="sm:w-[83px] sm:h-[59px]" src={brand2}></img>
        <img className="sm:w-[102px] sm:h-[75px]" src={brand3}></img>
        <img className="sm:w-[103px] sm:h-[42px]" src={brand4}></img>
        <img className="sm:w-[104px] sm:h-[62px]" src={brand5}></img>
        <img className="sm:w-[76px] sm:h-[72px] " src={brand6}></img>
      </div>
    </div>
  );
}
