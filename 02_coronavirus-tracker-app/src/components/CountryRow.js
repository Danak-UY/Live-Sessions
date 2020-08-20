import React from "react";
import { formatNumberWithComma } from "./functions/fuctions";
import numeral from "numeral";

import "./../assets/styles/CountryRow.css";

function CountryRow({ country, number, flag }) {
  return (
    <div className="country__row">
      <div className="country__row__img">
        <img loading="lazy" src={flag} alt={`${country} flag`} />
      </div>
      <h4>{country}</h4>
      <p>{numeral(number).format("0,0")}</p>
    </div>
  );
}

export default CountryRow;
