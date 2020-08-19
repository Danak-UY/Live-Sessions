import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, FormControl, MenuItem } from "@material-ui/core";

function StatsFilter({ title, img }) {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countriesList);
  const selectedCountry = useSelector((state) => state.selectedCountry);

  useEffect(() => {
    const getCountiesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: "SET_COUNTRIES_DATA",
            payload: data,
          });
        });
    };
    getCountiesData();
    const url = "https://disease.sh/v3/covid-19/all";
    getCountyData(url);
  }, []);

  function handleChange(ev) {
    const countryCode = ev.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    getCountyData(url, countryCode);
  }

  async function getCountyData(url, countryCode = "") {
    await fetch(url + "?yesterday=false")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SET_COUNTRY_DATA",
          payload: { data, countryCode },
        });
      });
  }

  return (
    <article className="card-stats">
      <img
        loading="eager"
        src={`${require(`./../assets/images/${img}.svg`)}`}
        alt="Globe Icon"
      />
      <div className="card-stats__content">
        <h3>{title}</h3>

        <FormControl>
          <Select onChange={handleChange} value={selectedCountry}>
            <MenuItem value="worldwide">Global</MenuItem>
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
