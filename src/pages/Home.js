import React from "react";
import Header from "../layout/Header";
import Slider from "../layout/Slider";
import EditorsPick from "../components/homeComps/EditorsPick";
//import FeaturedPosts from "../components/homeComps/FeaturedPosts";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <EditorsPick />
    </div>
  );
}
