import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import slugify from "slugify";
import { Button } from "antd";
import { SearchOutlined, FireOutlined } from "@ant-design/icons";
import "../assets/styles/SearchHome.css";
import { actionTypes } from "./../reducer";
import { useStateValue } from "./StateProvider";

import InputField from "./InputField";

function SearchHome() {
  const [{ avatarProfiles }, dispatch] = useStateValue();
  const history = useHistory();
  const [searchItem, setSearchItem] = useState("");
  function handleSearch(ev) {
    ev.preventDefault();
    if (searchItem) {
      dispatch({
        type: actionTypes.SET_SEARCH_QUERY,
        payload: searchItem,
      });
      history.push(`/search?q=${slugify(searchItem)}`);
    }
  }
  function handleLucky() {
    if (avatarProfiles[0].username) {
      dispatch({
        type: actionTypes.SET_SEARCH_QUERY,
        payload: avatarProfiles[avatarProfiles.length - 1].username.replaceAll(
          /\d/g,
          ""
        ),
      });
      history.push(`/search?q=${slugify(searchItem)}`);
    }
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
          onClick={handleLucky}
        >
          Feeling Lucky
        </Button>
      </div>
    </form>
  );
}

export default SearchHome;
