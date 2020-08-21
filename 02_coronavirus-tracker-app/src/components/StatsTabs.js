import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  makeStyles,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import MapIcon from "@material-ui/icons/Map";
import TimelineIcon from "@material-ui/icons/Timeline";

import StatsMap from "./StatsMap";
import StatsGraph from "./StatsGraph";

import "./../assets/styles/StatsTabs.css";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "var(--cl-primary)",
  },
}));

function StatsTabs({ title }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [toggleMap, setToggleMap] = useState(true);
  const categoryType = useSelector((state) => state.casesType);
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const historical = useSelector((state) => state.historicalDays);
  const countryData = useSelector((state) => state.countryData);
  function toggleInfo() {
    setToggleMap(!toggleMap);
  }

  function historicalSelect(historicalDays) {
    return (
      <FormControl className="filter__select--days">
        <Select onChange={handleChange} value={historical}>
          {[30, 60, 90, 120].map((days, index) => (
            <MenuItem value={days} key={index}>
              {days}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  function handleChange(ev) {
    console.log(ev.target.value);
    dispatch({
      type: "SET_HISTORY_DAYS",
      payload: ev.target.value,
    });
  }

  return (
    <article className="app__content__tabs">
      <div className="tabs__header">
        <div className="tabs__header__title">
          <h2>
            {toggleMap
              ? "Covid-19 Affected Areas"
              : `${
                  selectedCountry === "worldwide"
                    ? "Worldwide"
                    : countryData.country
                } last`}
          </h2>
          {!toggleMap && historicalSelect(historical)}
          <h2>{!toggleMap && ` days ${categoryType}`}</h2>
        </div>
        <Button
          onClick={toggleInfo}
          className={classes.button}
          startIcon={!toggleMap ? <MapIcon /> : <TimelineIcon />}
        >
          Show {!toggleMap ? "map" : "graph"}
        </Button>
      </div>
      <div className="tabs__content">
        {toggleMap ? (
          <StatsMap category={categoryType} />
        ) : (
          <StatsGraph category={categoryType} />
        )}
      </div>
    </article>
  );
}

export default StatsTabs;
