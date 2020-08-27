import React from "react";
import "../assets/styles/Home.css";
import { Button } from "antd";

import HeaderHome from "../components/HeaderHome";
import SearchHome from "../components/SearchHome";

function Home() {
  return (
    <div className="home__header">
      <HeaderHome />
      <SearchHome />
    </div>
  );
}

export default Home;
