import React from "react";

import tCard1 from "../../assets/teamPage/tCard1.png";
import tCard2 from "../../assets/teamPage/tCard2.png";
import tCard3 from "../../assets/teamPage/tCard3.png";
import tCard4 from "../../assets/teamPage/tCard4.png";
import tCard5 from "../../assets/teamPage/tCard5.png";

export default function TeamCards() {
  return (
    <div>
      <div className="flex gap-2 w-full">
        <img src={tCard1}></img>
        <div className="flex flex-row sm:flex-col w-full gap-1 sm:gap-2 ">
          <div className="flex flex-col sm:flex-row flex-1 sm:gap-2 gap-1">
            <img src={tCard2} className="sm:flex-1 flex-none"></img>
            <img src={tCard3} className="sm:flex-1 flex-none"></img>
          </div>
          <div className="flex flex-col sm:flex-row flex-1 sm:gap-2 gap-1">
            <img src={tCard4} className="sm:flex-1 flex-none"></img>
            <img src={tCard5} className="flex-none sm:flex-1"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
