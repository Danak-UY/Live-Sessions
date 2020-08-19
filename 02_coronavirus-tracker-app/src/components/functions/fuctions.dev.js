"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatNumberWithComma = formatNumberWithComma;
exports.sortDataByField = sortDataByField;

function formatNumberWithComma(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function sortDataByField(data, sortField) {
  return data.sort(function (a, b) {
    return a[sortField] < b[sortField];
  });
}