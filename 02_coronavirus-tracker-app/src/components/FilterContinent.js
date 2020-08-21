import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Select,
  FormControl,
  MenuItem,
  ListSubheader,
} from "@material-ui/core";
import numeral from "numeral";

import "./../assets/styles/FilterContinent.css";

const continentsList = [
  {
    name: "Africa",
    value: "Africa",
  },
  {
    name: "Asia",
    value: "Asia",
  },
  {
    name: "Europe",
    value: "Europe",
  },
  {
    name: "North America",
    value: "North America",
  },
  {
    name: "South America",
    value: "South America",
  },
  {
    name: "Oceania",
    value: "Australia/Oceania",
  },
];

function FilterContinent() {
  const dispatch = useDispatch();
  const APIURL = useSelector((state) => state.APIURL);
  const selectedContinent = useSelector((state) => state.filterContinent);
  const continentsData = useSelector((state) => state.continentsData);
  const allStatsData = useSelector((state) => state.allStatsData);
  const statSelected = useSelector((state) => state.filterStat);

  function handleChange(ev) {
    dispatch({
      type: "SET_FILTER_CONTINENT",
      payload: ev.target.value,
    });
  }

  useEffect(() => {
    const getContinentsData = async () => {
      await fetch(`${APIURL}/continents`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: "SET_CONTINENTS_DATA",
            payload: data,
          });
        });
    };
    getContinentsData();
  }, []);

  return (
    <FormControl variant="outlined">
      <Select onChange={handleChange} value={selectedContinent}>
        <MenuItem value="worldwide" className="continents__select">
          Global
          <span className="continents__stats">
            {numeral(allStatsData[statSelected]).format("0,0")}
          </span>
        </MenuItem>
        <ListSubheader>Continents</ListSubheader>
        {continentsData.map((continent, index) => (
          <MenuItem
            value={continent.continent}
            key={index}
            className="continents__select"
          >
            {continent.continent}
            <span className="continents__stats">
              {numeral(continent[statSelected]).format("0,0")}
            </span>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default FilterContinent;
