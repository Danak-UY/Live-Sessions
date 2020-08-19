export function formatNumberWithComma(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function sortDataByField(data, sortField) {
  return data.sort((a, b) => a[sortField] < b[sortField]);
}
