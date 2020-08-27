import React from "react";
import "../assets/styles/Home.css";

import HeaderHome from "../components/HeaderHome";
import SearchHome from "../components/SearchHome";

function HomePage() {
  return (
    <div className="home__header">
      <HeaderHome />
      <SearchHome />
    </div>
  );
}

export default HomePage;
