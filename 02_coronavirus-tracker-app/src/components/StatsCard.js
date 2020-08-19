import React from "react";
import { formatNumberWithComma } from "./functions/fuctions";

import "./../assets/styles/StatsCard.css";

function StatsCard({ title, img, totalCases, todayCases, casesPerMillion }) {
  const trending = (casesPerMillion / todayCases) * 100 < 1 ? "down" : "up";
  return (
    <article className="card-stats card-stats__numbers">
      <img src={`${require(`./../assets/images/${img}.svg`)}`} alt="Icon" />
      <div className="card-stats__content">
        <h3>{title}</h3>
        <h2>{formatNumberWithComma(todayCases)}</h2>
        <p className={`stats-${trending} stats-percentage`}>
          <img
            src={`${require(`./../assets/images/ic-trending-${trending}.svg`)}`}
            alt="Trend Icon"
          />
          {formatNumberWithComma(casesPerMillion.toFixed(0))}
          <span>x1M</span>
        </p>
      </div>
    </article>
  );
}

export default StatsCard;
