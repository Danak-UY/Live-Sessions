import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import AvatarProfile from "./AvatarProfile";
import "../assets/styles/HeaderHome.css";

function HeaderHome() {
  return (
    <header>
      <div className="header__links">
        <Link to="/mail">
          <Button type="text">Mail</Button>
        </Link>
        <Link to="/maps">
          <Button type="text">Maps</Button>
        </Link>
        <Link to="/calendar">
          <Button type="text">Calendar</Button>
        </Link>
      </div>
      <div className="header__card">
        <AvatarProfile />
      </div>
    </header>
  );
}

export default HeaderHome;
