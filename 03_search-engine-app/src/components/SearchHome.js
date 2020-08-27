import React, { useState } from "react";
import { Input, Button } from "antd";
import { SearchOutlined, AudioOutlined, FireOutlined } from "@ant-design/icons";
import "../assets/styles/SearchHome.css";

function SearchHome() {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="home__search">
      <img
        src={`${require(`./../assets/images/search-logo-white.svg`)}`}
        alt="Search logo"
      />
      <Input
        size="large"
        prefix={<SearchOutlined />}
        suffix={<AudioOutlined />}
        value={searchItem}
        onChange={(ev) => setSearchItem(ev.target.value)}
      />
      <div className="search__buttons">
        <Button
          type="primary"
          shape="round"
          icon={<SearchOutlined />}
          size="large"
        >
          Search
        </Button>
        <Button
          type="primary"
          shape="round"
          icon={<FireOutlined />}
          size="large"
          className="btn__secondary"
        >
          Feeling Lucky
        </Button>
      </div>
    </div>
  );
}

export default SearchHome;
