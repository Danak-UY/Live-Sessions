import React from "react";
import { useSelector } from "react-redux";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

import { drawDataOnMap } from "./functions/fuctions";

import "./../assets/styles/StatsMap.css";

function StatsMap({ category = "cases" }) {
  const mapCenter = useSelector((state) =>
    state.selectedCountry === "worldwide"
      ? { lat: 34.80746, lng: -40.4796 }
      : {
          lat: state.countryData.countryInfo.lat,
          lng: state.countryData.countryInfo.long,
        }
  );
  const mapZoom = useSelector((state) =>
    state.selectedCountry === "worldwide" ? 3 : 4
  );
  const mapData = useSelector((state) => state.countriesData);

  return (
    <article className="app__content__map">
      <LeafletMap center={mapCenter} zoom={mapZoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright" >OpenStreetMap</a> contributors'
        />
        {mapData.map((country, index) =>
          drawDataOnMap(country, index, category)
        )}
      </LeafletMap>
    </article>
  );
}

export default StatsMap;
