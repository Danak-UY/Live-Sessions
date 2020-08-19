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
        var countries = action.payload.map(function (item) {
          return {
            name: item.country,
            value: item.countryInfo.iso3
          };
        });
        return _objectSpread({}, state, {
          countriesData: (0, _fuctions.sortDataByField)(action.payload, "cases"),
          countriesList: countries
        });
      }

    case "SET_COUNTRY_DATA":
      {
        var data = action.payload.data;
        var countryCode = action.payload.countryCode || "worldwide";
        return _objectSpread({}, state, {
          countryData: data,
          selectedCountry: countryCode
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}