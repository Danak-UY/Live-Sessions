import React from "react";
import { useSelector, useDispatch } from "react-redux";

import StatsCard from "./StatsCard";
import StatsFilter from "./StatsFilter";

import "./../assets/styles/StatsCardsList.css";

function StatsCardsList() {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.countryData);

  function updateCategory(type) {
    dispatch({
      type: "SET_CATEGORY_TYPE",
      payload: type,
    });
  }

  return (
    <section className="cards-container">
      <StatsFilter title="Stats Overview" img="ic-globe" />
      {countryData?.length !== 0 && (
        <>
          <StatsCard
            title="Today Cases"
            totalCases={countryData.cases}
            todayCases={countryData.todayCases}
            casesPerMillion={countryData.casesPerOneMillion}
            img="ic-emo-red"
            cardType="cases"
            handleClick={(e) => updateCategory("cases")}
          />
          <StatsCard
            title="Today Recovered"
            totalCases={countryData.recovered}
            todayCases={countryData.todayRecovered}
            casesPerMillion={countryData.recoveredPerOneMillion}
            img="ic-emo-green"
            cardType="recovered"
            handleClick={(e) => updateCategory("recovered")}
          />
          <StatsCard
            title="Today Deaths"
            totalCases={countryData.deaths}
            todayCases={countryData.todayDeaths}
            casesPerMillion={countryData.deathsPerOneMillion}
            img="ic-emo-gray"
            cardType="deaths"
            handleClick={(e) => updateCategory("deaths")}
          />
        </>
      )}
    </section>
  );
}

export default StatsCardsList;
