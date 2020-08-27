import React from "react";

function ResultStats({ formattedSearchTime, formattedTotalResults }) {
  return (
    <div>
      <p className="search__stats">
        About <span>{formattedTotalResults}</span> results (
        {formattedSearchTime} seconds)
      </p>
    </div>
  );
}

export default ResultStats;
