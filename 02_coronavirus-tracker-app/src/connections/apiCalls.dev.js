"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountyData = getCountyData;

var _reactRedux = require("react-redux");

function getCountyData(url) {
  var countryCode,
      dispatch,
      _args = arguments;
  return regeneratorRuntime.async(function getCountyData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          countryCode = _args.length > 1 && _args[1] !== undefined ? _args[1] : "";
          dispatch = (0, _reactRedux.useDispatch)();
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(url + "?yesterday=false").then(function (response) {
            return response.json();
          }).then(function (data) {
            if (countryCode !== "") {
              dispatch({
                type: "SET_COUNTRY",
                payload: countryCode
              });
            }

            dispatch({
              type: "SET_COUNTRY_DATA",
              payload: data
            });
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}