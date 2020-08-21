import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, FormControl, MenuItem } from "@material-ui/core";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMore";
import "./../assets/styles/StatsFilter.css";

const DateMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatNumber(num) {
  return num < 10 ? "0" + num : num;
}

function formatDate(timestamp) {
  const dateTime = new Date(timestamp);
  return `${DateMonth[dateTime.getMonth()]}
   ${dateTime.getDate()},
   ${formatNumber(dateTime.getHours())}:${formatNumber(dateTime.getMinutes())}`;
}

function StatsFilter({ title, img }) {
  const dispatch = useDispatch();
  const APIURL = useSelector((state) => state.APIURL);
  const lastUpdate = useSelector((state) => state.lastUpdate);
  const countriesList = useSelector((state) => state.countriesList);
  const selectedCountry = useSelector((state) => state.selectedCountry);

  useEffect(() => {
    const getCountiesData = async () => {
      await fetch(`${APIURL}/countries`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: "SET_COUNTRIES_DATA",
            payload: data,
          });
        });
    };
    getCountiesData();
    const url = `${APIURL}/all`;
    getCountyData(url);
  }, []);

  function handleChange(ev) {
    const countryCode = ev.target.value;

    const url =
      countryCode === "worldwide"
        ? `${APIURL}/all`
        : `${APIURL}/countries/${countryCode}`;

    getCountyData(url, countryCode);
  }

  async function getCountyData(url, countryCode = "") {
    await fetch(url + "?yesterday=true")
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
      <div className="card-stats__img">
        <img
          loading="eager"
          src={`${require(`./../assets/images/${img}.svg`)}`}
          alt="Globe Icon"
        />
      </div>
      <div className="card-stats__content">
        <h3>{title}</h3>
        <FormControl className="filter__select">
          <Select
            onChange={handleChange}
            value={selectedCountry}
            IconComponent={(props) => <ExpandMoreRoundedIcon />}
          >
            <MenuItem value="worldwide">Global</MenuItem>
            {countriesList.map((country, index) => (
              <MenuItem value={country.value} key={index}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {lastUpdate && (
          <p className="stats-percentage stats-date">
            {formatDate(lastUpdate)}
          </p>
        )}
      </div>
    </article>
  );
}

export default StatsFilter;
