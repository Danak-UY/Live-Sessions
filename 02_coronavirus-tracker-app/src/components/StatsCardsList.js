import React from "react";

import StatsCard from "./StatsCard";
import StatsFilter from "./StatsFilter";

import "./../assets/styles/StatsCardsList.css";

function StatsCardsList() {
  return (
    <section className="cards-container">
      <StatsFilter title="Stats Overview" img="ic-globe" />
      <StatsCard
        title="Total Cases"
        number="1,245,347"
        percentage="95"
        trend="up"
        img="ic-emo-red"
      />
      <StatsCard
        title="Total Recovered"
        number="259,544"
        percentage="79"
        trend="down"
        img="ic-emo-green"
      />
      <StatsCard
        title="Total Deaths"
        number="68,174"
        percentage="21"
        trend="up"
        img="ic-emo-gray"
      />
    </section>
  );
}

export default StatsCardsList;
