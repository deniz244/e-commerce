import React from "react";
import AboutHeader from "../components/aboutPageComps/AboutHeader";
import AboutContent from "../components/aboutPageComps/AboutContent";
import AboutStats from "../components/aboutPageComps/AboutStats";
import AboutTeam from "../components/aboutPageComps/AboutTeam";

export default function AboutPage() {
  return (
    <div>
      <AboutHeader />
      <AboutContent />
      <AboutStats />
      <AboutTeam />
    </div>
  );
}
