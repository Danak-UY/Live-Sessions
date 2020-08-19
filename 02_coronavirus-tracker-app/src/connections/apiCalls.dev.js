"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountyData = getCountyData;

function getCountyData(url, dispatch) {
  var countryCode,
      _args = arguments;
  return regeneratorRuntime.async(function getCountyData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          countryCode = _args.length > 2 && _args[2] !== undefined ? _args[2] : "";
          _context.next = 3;
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

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}