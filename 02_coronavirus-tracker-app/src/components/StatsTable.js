import React from "react";

import "./../assets/styles/StatsTable.css";
import CountriesTable from "./CountriesTable";
import FilterStat from "./FilterStat";
import FilterContinent from "./FilterContinent";

function StatsTable() {
  return (
    <section className="app__content__table">
      <div className="table__filter">
        <FilterStat />
        <FilterContinent />
      </div>
      <CountriesTable />
    </section>
  );
}

export default StatsTable;
