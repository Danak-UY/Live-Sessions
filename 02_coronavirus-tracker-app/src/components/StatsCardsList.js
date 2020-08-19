import React from "react";
import { useSelector } from "react-redux";

import StatsCard from "./StatsCard";
import StatsFilter from "./StatsFilter";

import "./../assets/styles/StatsCardsList.css";

function StatsCardsList() {
  const countryData = useSelector((state) => state.countryData);
  return (
    <section className="cards-container">
      <StatsFilter title="Stats Overview" img="ic-globe" />
      {countryData.length !== 0 && (
        <>
          <StatsCard
            title="Today Cases"
            totalCases={countryData.cases}
            todayCases={countryData.todayCases}
            casesPerMillion={countryData.casesPerOneMillion}
            img="ic-emo-red"
          />
          <StatsCard
            title="Today Recovered"
            totalCases={countryData.recovered}
            todayCases={countryData.todayRecovered}
            casesPerMillion={countryData.recoveredPerOneMillion}
            img="ic-emo-green"
          />
          <StatsCard
            title="Today Deaths"
            totalCases={countryData.deaths}
            todayCases={countryData.todayDeaths}
            casesPerMillion={countryData.deathsPerOneMillion}
            img="ic-emo-gray"
          />
        </>
      )}
    </section>
  );
}

export default StatsCardsList;
