import React from "react";
import StatsGraph from "./StatsGraph";

import "./../assets/styles/StatsTabs.css";

function StatsMap({ title }) {
  return (
    <article className="app__content__tabs">
      <h2>{title}</h2>
      <StatsGraph title="Worldwide stats" />
    </article>
  );
}

export default StatsMap;
