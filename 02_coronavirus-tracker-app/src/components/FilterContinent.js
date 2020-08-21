import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Select,
  FormControl,
  MenuItem,
  ListSubheader,
} from "@material-ui/core";

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
  const selectedContinent = useSelector((state) => state.filterContinent);
  function handleChange(ev) {
    dispatch({
      type: "SET_FILTER_CONTINENT",
      payload: ev.target.value,
    });
  }
  return (
    <FormControl variant="outlined">
      <Select onChange={handleChange} value={selectedContinent}>
        <MenuItem value="worldwide">Global</MenuItem>
        <ListSubheader>Continents</ListSubheader>
        {continentsList.map((continent, index) => (
          <MenuItem value={continent.value} key={index}>
            {continent.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default FilterContinent;
