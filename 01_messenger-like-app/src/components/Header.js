import React from "react";
import "./styles/Header.css";

function Header() {
  return (
    <header>
      <h1>
        <span>Welcome to</span>
        <img
          src={process.env.PUBLIC_URL + "/images/string-logo.svg"}
          alt="String Logo"
          loading="eager"
        />
      </h1>
      <h2 className="header_subtitle">
        Share the link to chat with other people.
      </h2>
    </header>
  );
}

export default Header;
