import React from "react";
import { useSelector } from "react-redux";

import StatsMap from "./StatsMap";
import StatsGraph from "./StatsGraph";

import "./../assets/styles/StatsTabs.css";

function StatsTabs({ title }) {
  const categoryType = useSelector((state) => state.casesType);
  return (
    <article className="app__content__tabs">
      <h2>{title}</h2>
      <StatsMap category={categoryType} />
      <StatsGraph category={categoryType} />
    </article>
  );
}

export default StatsTabs;
