"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reducer;

var _fuctions = require("./../components/functions/fuctions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer(state, action) {
  switch (action.type) {
    case "SET_COUNTRIES_DATA":
      {
        var allContriesData = action.payload;
        var countries = allContriesData.map(function (item) {
          return {
            name: item.country,
            value: item.countryInfo.iso3
          };
        });
        return _objectSpread({}, state, {
          countriesData: (0, _fuctions.sortDataByField)(allContriesData, state.filterStat),
          countriesList: countries
        });
      }

    case "SET_COUNTRY_DATA":
      {
        var data = action.payload.data;
        var countryCode = action.payload.countryCode || "worldwide";
        var allData = countryCode === "worldwide" ? data : state.allStatsData;
        return _objectSpread({}, state, {
          countryData: data,
          selectedCountry: countryCode,
          lastUpdate: data.updated,
          allStatsData: allData
        });
      }

    case "SET_CONTINENTS_DATA":
      {
        return _objectSpread({}, state, {
          continentsData: action.payload.sort(function (a, b) {
            return a.continent > b.continent;
          })
        });
      }

    case "SET_GRAPH_DATA":
      {
        return _objectSpread({}, state, {
          graphData: action.payload
        });
      }

    case "SET_CATEGORY_TYPE":
      {
        return _objectSpread({}, state, {
          casesType: action.payload
        });
      }

    case "SET_HISTORY_DAYS":
      {
        return _objectSpread({}, state, {
          historicalDays: action.payload
        });
      }

    case "SET_FILTER_STAT":
      {
        var statSelected = action.payload;
        return _objectSpread({}, state, {
          countriesData: (0, _fuctions.sortDataByField)(state.countriesData, statSelected),
          countriesContinentData: (0, _fuctions.sortDataByField)(state.countriesContinentData, statSelected),
          filterStat: statSelected
        });
      }

    case "SET_FILTER_CONTINENT":
      {
        var continentSelected = action.payload;
        var continentData = [];

        if (continentSelected !== "worldwide") {
          continentData = state.countriesData.filter(function (country) {
            return country.continent === continentSelected;
          });
        }

        return _objectSpread({}, state, {
          filterContinent: continentSelected,
          countriesContinentData: (0, _fuctions.sortDataByField)(continentData, state.filterStat)
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}