"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatNumberWithComma = formatNumberWithComma;

function formatNumberWithComma(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}