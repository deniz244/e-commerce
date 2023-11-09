import React from "react";
import Header from "../layout/Header";
import CarouselWithContent from "../components/homeComps/CarouselWithContent";
import EditorsPick from "../components/homeComps/EditorsPick";
import BestsellerProducts from "../components/homeComps/BestsellerProducts";
import FeaturedPosts from "../components/homeComps/FeaturedPosts";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <CarouselWithContent />
      <EditorsPick />
      <BestsellerProducts />
      <CarouselWithContent />
      <FeaturedPosts />
      <Footer />
    </div>
  );
}
