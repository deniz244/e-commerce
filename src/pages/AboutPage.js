import React from "react";
import AboutHeader from "../components/aboutPageComps/AboutHeader";
import AboutContent from "../components/aboutPageComps/AboutContent";
import AboutStats from "../components/aboutPageComps/AboutStats";
import AboutVideo from "../components/aboutPageComps/AboutVideo";
import AboutTeam from "../components/aboutPageComps/AboutTeam";
import AboutBrands from "../components/aboutPageComps/AboutBrands";
import AboutTestimonial from "../components/aboutPageComps/AboutTestimonial";

import Footer from "../layout/Footer";

export default function AboutPage() {
  return (
    <div>
      <AboutHeader />
      <AboutContent />
      <AboutStats />
      <AboutVideo />
      <AboutTeam />
      <AboutBrands />
      <AboutTestimonial />
      <Footer />
    </div>
  );
}
