import React from "react";

import StatsMap from "./StatsMap";
import StatsGraph from "./StatsGraph";

import "./../assets/styles/StatsTabs.css";

function StatsTabs({ title }) {
  return (
    <article className="app__content__tabs">
      <h2>{title}</h2>
      <StatsMap />
      <StatsGraph category="deaths" />
    </article>
  );
}

export default StatsTabs;
