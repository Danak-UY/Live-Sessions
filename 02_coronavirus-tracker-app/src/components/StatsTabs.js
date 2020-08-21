import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, makeStyles } from "@material-ui/core";
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
  const classes = useStyles();
  const [toggleMap, setToggleMap] = useState(true);
  const categoryType = useSelector((state) => state.casesType);
  function toggleInfo() {
    setToggleMap(!toggleMap);
  }
  return (
    <article className="app__content__tabs">
      <div className="tabs__header">
        <h2>
          {toggleMap
            ? "Covid-19 Affected Areas"
            : `Worldwide today ${categoryType}`}
        </h2>
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
