import React from "react";
import { useSelector } from "react-redux";

import CountryRow from "./CountryRow";

function CountriesTable() {
  const countries = useSelector((state) => state.countriesData);

  return (
    <article className="country__table">
      {countries.length !== 0 &&
        countries.map(({ country, cases, countryInfo }, index) => (
          <CountryRow
            key={index}
            country={country}
            number={cases}
            flag={countryInfo.flag}
          />
        ))}
    </article>
  );
}

export default CountriesTable;
