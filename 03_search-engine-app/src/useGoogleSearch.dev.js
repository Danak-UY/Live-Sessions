"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useGoogleSearch = function useGoogleSearch(term) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  (0, _react.useEffect)(function () {
    if (term) {
      var fetchData = function fetchData() {
        return regeneratorRuntime.async(function fetchData$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return regeneratorRuntime.awrap(fetch("https://www.googleapis.com/customsearch/v1?key=".concat(process.env.REACT_APP_GOOGLE_API_KEY, "&cx=").concat(process.env.REACT_APP_CONTEXT_KEY, "&q=").concat(term)).then(function (response) {
                  return response.json();
                }).then(function (result) {
                  return setData(result);
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        });
      };

      fetchData();
    }
  }, [term]);
  return {
    data: data
  };
};

var _default = useGoogleSearch;
exports["default"] = _default;