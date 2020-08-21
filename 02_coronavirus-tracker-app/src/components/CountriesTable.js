import React from "react";
import { useSelector } from "react-redux";

import CountryRow from "./CountryRow";

function CountriesTable() {
  const countries = useSelector((state) =>
    state.countriesContinentData.length === 0
      ? state.countriesData
      : state.countriesContinentData
  );
  const statSelected = useSelector((state) => state.filterStat);

  return (
    <article className="country__table">
      {countries.length !== 0 &&
        countries.map((country, index) => (
          <CountryRow
            key={index}
            country={country.country}
            number={country[statSelected]}
            flag={country.countryInfo.flag}
          />
        ))}
    </article>
  );
}

export default CountriesTable;
