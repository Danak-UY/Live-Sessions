import React from "react";

import "./../assets/styles/ResultCard.css";

function ResultCard({ title, link, displayLink, htmlSnippet, pagemap }) {
  return (
    <article>
      <div>
        {pagemap?.cse_thumbnail?.length > 0 &&
          pagemap?.cse_thumbnail[0]?.src && (
            <img
              className="card__thumbnail"
              src={pagemap.cse_thumbnail[0].src}
              alt="Link thumbnail"
            />
          )}
        <a href={link}>{displayLink}</a>
      </div>

      <a href={link}>
        <h1>{title}</h1>
      </a>
      <p
        dangerouslySetInnerHTML={{
          __html: htmlSnippet.replace(/<\/?[^>]+(>|$)/g, ""),
        }}
      ></p>
    </article>
  );
}

export default ResultCard;
