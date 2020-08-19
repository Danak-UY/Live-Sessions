import React from "react";

function CountryRow({ country, number, flag }) {
  return (
    <div className="country__row">
      <img src={flag} alt={`${country} flag`} />
      <p>{country}</p>
      <p>{number}</p>
    </div>
  );
}

export default CountryRow;
