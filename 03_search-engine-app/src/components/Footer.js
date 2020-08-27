import React from "react";
import { Link } from "react-router-dom";
import { Divider, Button } from "antd";

import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer>
      <Divider />
      <div className="footer__links">
        <div className="footer__links--left">
          <Link to="/advertising">
            <Button type="link">Advertising</Button>
          </Link>
          <Link to="/business">
            <Button type="link">Business</Button>
          </Link>
          <Link to="/about">
            <Button type="link">About Search</Button>
          </Link>
        </div>
        <div className="footer__links--right">
          <Link to="/privacity">
            <Button type="link">Privacy</Button>
          </Link>
          <Link to="/terms-and-conditions">
            <Button type="link">Terms & Conditions</Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
