import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

import { categoryColors } from "./../../assets/styles/colors.js";

export function formatNumberWithComma(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function sortDataByField(data, sortField) {
  return data.sort((a, b) => a[sortField] < b[sortField]);
}

export function drawDataOnMap(country, index, categoryType = "cases") {
  return (
    <Circle
      key={index}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={categoryColors[categoryType].hex}
      fillColor={categoryColors[categoryType].hex}
      radius={
        Math.sqrt(country[categoryType]) *
        categoryColors[categoryType].multiplier
      }
    >
      <Popup>
        <div className="map-info-container">
          <div
            className="map-info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="map-info-name">{country.country}</div>
          <div className="map-info-confirmed">
            <img
              loading="lazy"
              src={`${require(`./../../assets/images/ic-emo-red.svg`)}`}
              alt="Icon"
            />
            <strong>Cases:</strong> {numeral(country.cases).format("0,0")}
          </div>
          <div className="map-info-recovered">
            <img
              loading="lazy"
              src={`${require(`./../../assets/images/ic-emo-green.svg`)}`}
              alt="Icon"
            />
            <strong>Recovered:</strong>{" "}
            {numeral(country.recovered).format("0,0")}
          </div>
          <div className="map-info-deaths">
            <img
              loading="lazy"
              src={`${require(`./../../assets/images/ic-emo-gray.svg`)}`}
              alt="Icon"
            />
            <strong>Deaths:</strong> {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  );
}
