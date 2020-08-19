import React from "react";

import "./../assets/styles/StatsCard.css";

function StatsCard({ title, img, trend, number, percentage }) {
  return (
    <article className="card-stats">
      <img src={`${require(`./../assets/images/${img}.svg`)}`} alt="Icon" />
      <div className="card-stats__content">
        <h3>{title}</h3>
        <h2>{number}</h2>
        <p className={`stats-${trend} stats-percentage`}>
          <img
            src={`${require(`./../assets/images/ic-trending-${trend}.svg`)}`}
            alt="Trend Icon"
          />
          {percentage}%
        </p>
      </div>
    </article>
  );
}

export default StatsCard;
