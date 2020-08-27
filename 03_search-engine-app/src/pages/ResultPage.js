import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import slugify from "slugify";
import { useStateValue } from "./../components/StateProvider";
import useGoogleSearch from "./../useGoogleSearch";
import { actionTypes } from "./../reducer";
import { Button, Divider } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import AvatarProfile from "./../components/AvatarProfile";
import Response from "./../response";
import InputField from "./../components/InputField";
import ResultTabs from "./../components/ResultTabs";

import "./../assets/styles/ResultPage.css";

function ResultPage() {
  const [{ query }, dispatch] = useStateValue();
  const history = useHistory();
  const [searchItem, setSearchItem] = useState(query);
  // LIVE API DATA
  //const { data } = useGoogleSearch(query);
  const data = Response;

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
  return (
    <div>
      <div className="result__header">
        <div className="header__search">
          <Link to="/">
            <img
              src={`${require(`./../assets/images/search-logo-white.svg`)}`}
              alt="Search logo"
            />
          </Link>
          <form>
            <InputField
              handleChange={(value) => setSearchItem(value)}
              searchItem={searchItem}
            />
            <Button
              type="primary"
              shape="round"
              icon={<SearchOutlined />}
              size="large"
              htmlType="submit"
              onClick={handleSearch}
            />
          </form>
        </div>
        <div className="header__card">
          <AvatarProfile />
        </div>
      </div>
      <div className="result__tabs">
        <ResultTabs />
        <Divider />
      </div>
    </div>
  );
}

export default ResultPage;
