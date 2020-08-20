import React from "react";
import numeral from "numeral";

import "./../assets/styles/StatsCard.css";

function StatsCard({
  title,
  img,
  totalCases,
  todayCases,
  casesPerMillion,
  handleClick,
}) {
  const trending = (casesPerMillion / todayCases) * 100 < 1 ? "down" : "up";
  return (
    <article className="card-stats card-stats__numbers" onClick={handleClick}>
      <img
        loading="eager"
        src={`${require(`./../assets/images/${img}.svg`)}`}
        alt="Icon"
      />
      <div className="card-stats__content">
        <h3>{title}</h3>
        <h2>{numeral(todayCases).format("0,0")}</h2>
        <p className={`stats-${trending} stats-percentage`}>
          <img
            src={`${require(`./../assets/images/ic-trending-${trending}.svg`)}`}
            alt="Trend Icon"
          />
          {numeral(casesPerMillion.toFixed(0)).format("0,0")}
          <span>x1M</span>
        </p>
      </div>
    </article>
  );
}

export default StatsCard;
