import React from "react";
import { useSelector } from "react-redux";
import numeral from "numeral";

import "./../assets/styles/StatsCard.css";

function StatsCard({
  title,
  img,
  totalCases,
  todayCases,
  casesPerMillion,
  handleClick,
  cardType,
}) {
  const cardActive = useSelector((state) => state.casesType === cardType);
  const trending = (todayCases * 100) / casesPerMillion < 10 ? "down" : "up";

  return (
    <article className="card-stats card-stats__numbers" onClick={handleClick}>
      <div
        className={`card-stats__img ${
          cardActive ? "card__active" : ""
        } card__${cardType}`}
      >
        <img
          loading="eager"
          src={`${require(`./../assets/images/${img}.svg`)}`}
          alt="Icon"
        />
      </div>
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
