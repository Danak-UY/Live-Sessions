import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Select,
  FormControl,
  MenuItem,
  ListSubheader,
} from "@material-ui/core";

const statsList = [
  {
    name: "Total",
    values: [
      {
        name: "Total Cases",
        value: "cases",
      },
      {
        name: "Total Recovered",
        value: "recovered",
      },
      {
        name: "Total Deaths",
        value: "deaths",
      },
      {
        name: "Total Tests",
        value: "tests",
      },
    ],
  },
  {
    name: "Today",
    values: [
      {
        name: "Today Cases",
        value: "todayCases",
      },
      {
        name: "Today Recovered",
        value: "todayRecovered",
      },
      {
        name: "Today Deaths",
        value: "todayDeaths",
      },
      {
        name: "Today Tests",
        value: "todayTests",
      },
      {
        name: "Active",
        value: "active",
      },
      {
        name: "Critical",
        value: "critical",
      },
    ],
  },
  {
    name: "Per Million",
    values: [
      {
        name: "Cases per Million",
        value: "casesPerOneMillion",
      },
      {
        name: "Recovered per Million",
        value: "recoveredPerOneMillion",
      },
      {
        name: "Death per Million",
        value: "deathsPerOneMillion",
      },
      {
        name: "Active per Million",
        value: "activePerOneMillion",
      },
      {
        name: "Critical per Million",
        value: "criticalPerOneMillion",
      },
    ],
  },
];

function FilterStat() {
  const dispatch = useDispatch();
  const selectedStat = useSelector((state) => state.filterStat);
  function handleChange(ev) {
    dispatch({
      type: "SET_FILTER_STAT",
      payload: ev.target.value,
    });
  }
  return (
    <FormControl variant="outlined">
      <Select onChange={handleChange} value={selectedStat}>
        {statsList.map((statCategory, indexCategory) =>
          // <ListSubheader key={indexCategory}>
          //   {statCategory.name}
          // </ListSubheader>
          statCategory.values.map((stat, index) => (
            <MenuItem value={stat.value} key={index}>
              {stat.name}
            </MenuItem>
          ))
        )}
      </Select>
    </FormControl>
  );
}

export default FilterStat;
