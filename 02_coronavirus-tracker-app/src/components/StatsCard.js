import React from "react";

function StatsCard({ title, img }) {
  return (
    <article className="card-stats">
      <img src="" alt="Icon" />
      <div className="card-stats__content">
        <h3>{title}</h3>
        <h2>1,245,347</h2>
        <p>95%</p>
      </div>
    </article>
  );
}

export default StatsCard;
