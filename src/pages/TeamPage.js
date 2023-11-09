import React from "react";
import Header from "../layout/Header";
import TeamHeader from "../components/teamPageComps/TeamHeader";
import TeamCards from "../components/teamPageComps/TeamCards";
import AboutTeam from "../components/aboutPageComps/AboutTeam";
import TeamPrice from "../components/teamPageComps/TeamPrice";

export default function TeamPage() {
  return (
    <div>
      <Header />
      <TeamHeader />
      <TeamCards />
      <AboutTeam />
      <TeamPrice />
    </div>
  );
}
