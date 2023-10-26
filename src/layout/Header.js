import React from "react";
import DarkNav from "../components/navbars/DarkNav";
import LightNav from "../components/navbars/LightNav";

export default function Header() {
  return (
    <div>
      <DarkNav />
      <LightNav />
    </div>
  );
}
