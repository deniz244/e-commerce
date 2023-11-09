import card1 from "../../assets/shopCards/shopCard1.png";
import card2 from "../../assets/shopCards/shopCard2.png";
import card3 from "../../assets/shopCards/shopCard3.png";
import card4 from "../../assets/shopCards/shopCard4.png";
import card5 from "../../assets/shopCards/shopCard5.png";

export default function ShopCards() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="container m-auto ">
        <div className="row flex p-6 gap-4 justify-center items-center text-white text-center">
          <div className="col-md-4 w-[332px] h-[232px]">
            <div className="relative">
              <img className="relative z-0 " src={card1}></img>
              <div className=" absolute z-50  top-[40%] left-[30%] ">
                <h2 className="text-base font-bold">CLOTHS</h2>
                <h6 className="text-sm font-normal">5 Items</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 w-[332px] h-[232px]">
            <div className="relative">
              <img className="relative z-0" src={card2}></img>
              <div className=" absolute z-50   top-[40%] left-[30%] ">
                <h2 className="text-base font-bold ">CLOTHS</h2>
                <h6 className="text-sm font-normal">5 Items</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 w-[332px] h-[232px]">
            <div className="relative">
              <img className="relative z-0" src={card3}></img>
              <div className=" absolute z-50  top-[40%] left-[30%] ">
                <h2 className="text-base font-bold ">CLOTHS</h2>
                <h6 className="text-sm font-normal">5 Items</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 w-[332px] h-[232px]">
            <div className="relative">
              <img className="relative z-0" src={card4}></img>
              <div className=" absolute z-50  top-[40%] left-[30%] ">
                <h2 className="text-base font-bold ">CLOTHS</h2>
                <h6 className="text-sm font-normal">5 Items</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 w-[332px] h-[232px]">
            <div className="relative">
              <img className="relative z-0" src={card5}></img>
              <div className=" absolute z-50  top-[40%] left-[30%] ">
                <h2 className="text-base font-bold ">CLOTHS</h2>
                <h6 className="text-sm font-normal">5 Items</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
