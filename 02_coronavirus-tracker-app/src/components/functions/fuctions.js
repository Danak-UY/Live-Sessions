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
        <h1>pop</h1>
      </Popup>
    </Circle>
  );
}
