import React from "react";

import "./../assets/styles/StatsTable.css";
import CountriesTable from "./CountriesTable";

function StatsTable() {
  return (
    <section className="app__content__table">
      <CountriesTable />
    </section>
  );
}

export default StatsTable;
