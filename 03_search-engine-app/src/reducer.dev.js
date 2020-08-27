"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.actionTypes = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionTypes = {
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
  RESET_SEARCH_QUERY: "RESET_SEARCH_QUERY"
};
exports.actionTypes = actionTypes;

var reducer = function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_SEARCH_QUERY:
      {
        console.log("reducer", action.payload);
        return _objectSpread({}, state, {
          query: action.payload
        });
      }

    case actionTypes.RESET_SEARCH_QUERY:
      {
        return _objectSpread({}, state, {
          query: null
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

var _default = reducer;
exports["default"] = _default;