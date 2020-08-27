import React, { useState } from "react";
import { Button } from "antd";
import { SearchOutlined, AudioOutlined, FireOutlined } from "@ant-design/icons";
import "../assets/styles/SearchHome.css";

import InputField from "./InputField";

function SearchHome() {
  const [searchItem, setSearchItem] = useState("");
  function handleSearch(ev) {
    ev.preventDefault();
    console.log(searchItem);
  }
  return (
    <form className="home__search">
      <img
        src={`${require(`./../assets/images/search-logo-white.svg`)}`}
        alt="Search logo"
      />
      <InputField
        handleChange={(value) => setSearchItem(value)}
        searchItem={searchItem}
      />
      <div className="search__buttons">
        <Button
          type="primary"
          shape="round"
          icon={<SearchOutlined />}
          size="large"
          htmlType="submit"
          onClick={handleSearch}
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
    </form>
  );
}

export default SearchHome;
