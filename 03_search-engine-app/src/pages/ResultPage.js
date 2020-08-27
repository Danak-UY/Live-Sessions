import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import slugify from "slugify";
import { useStateValue } from "./../components/StateProvider";
import useGoogleSearch from "./../useGoogleSearch";
import { actionTypes } from "./../reducer";
import { Button, Divider, BackTop } from "antd";
import { SearchOutlined, ArrowUpOutlined } from "@ant-design/icons";

import AvatarProfile from "./../components/AvatarProfile";
import Response from "./../response";
import InputField from "./../components/InputField";
import ResultTabs from "./../components/ResultTabs";
import ResultCard from "./../components/ResultCard";
import ResultStats from "./../components/ResultStats";

import "./../assets/styles/ResultPage.css";

function ResultPage() {
  const [{ query }, dispatch] = useStateValue();
  const history = useHistory();
  const [searchItem, setSearchItem] = useState(query);
  const [searchPage, setSearchPage] = useState(0);
  // LIVE API DATA
  // const { data } = useGoogleSearch(query, searchPage);
  const data = Response;
  const [dataList, setDataList] = useState([]);

  console.log("page results", data);
  console.log("page items", dataList);

  useEffect(() => {
    if (data.items) setDataList([...dataList, ...data.items]);
  }, [data]);

  function handleSearch(ev) {
    ev.preventDefault();
    if (searchItem) {
      console.log("handle change", searchItem);
      setSearchPage(0);
      dispatch({
        type: actionTypes.SET_SEARCH_QUERY,
        payload: searchItem,
      });
      history.push(`/search?q=${slugify(searchItem)}`);
    }
  }

  function addResults() {
    setSearchPage(searchPage + 1);
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
      <div className="result__cards">
        {!data.error && data.length !== 0 ? (
          <>
            <ResultStats {...data.searchInformation} />
            {dataList.map((item, index) => (
              <ResultCard key={index} {...item} />
            ))}
          </>
        ) : (
          <p>Error</p>
        )}
        {!data.error &&
          data.length !== 0 &&
          data.queries?.nextPage &&
          data.queries?.nextPage[0] && (
            <div className="button__load-more">
              <Button
                onClick={addResults}
                type="ghost"
                shape="round"
                size="large"
              >
                Load more results
              </Button>
            </div>
          )}
      </div>
      <BackTop className="back-to-top">
        <ArrowUpOutlined />
      </BackTop>
    </div>
  );
}

export default ResultPage;
