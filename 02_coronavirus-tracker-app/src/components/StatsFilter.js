import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, FormControl, MenuItem, InputLabel } from "@material-ui/core";

function StatsFilter({ title }) {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countriesList);
  const selectedCountry = useSelector((state) => state.selectedCountry);

  useEffect(() => {
    const getCountiesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((item) => ({
            name: item.country,
            value: item.countryInfo.iso3,
          }));

          dispatch({
            type: "SET_COUNTRIES_LIST",
            payload: countries,
          });
        });
    };
    getCountiesData();
  }, []);

  function handleChange(ev) {
    dispatch({
      type: "SET_COUNTRY",
      payload: ev.target.value,
    });
  }

  return (
    <article className="card-stats">
      <img src="" alt="Icon" />
      <div className="card-stats__content">
        <h3>{title}</h3>

        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">Search</InputLabel>
          <Select
            onChange={handleChange}
            label="Search"
            value={selectedCountry}
          >
            <MenuItem value="worldwide">
              <em>Worldwide</em>
            </MenuItem>
            {countriesList.map((country, index) => (
              <MenuItem value={country.value} key={index}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </article>
  );
}

export default StatsFilter;
