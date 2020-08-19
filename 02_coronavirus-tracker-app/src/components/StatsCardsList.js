import React from "react";

import StatsCard from "./StatsCard";
import StatsFilter from "./StatsFilter";

import "./../assets/styles/StatsCardsList.css";

function StatsCardsList() {
  return (
    <section className="cards-container">
      <StatsFilter title="Stats Overview" />
      <StatsCard title="Total Cases" />
      <StatsCard title="Total Recovered" />
      <StatsCard title="Total Deaths" />
    </section>
  );
}

export default StatsCardsList;
