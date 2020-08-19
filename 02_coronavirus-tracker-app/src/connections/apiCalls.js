export async function getCountyData(url, dispatch, countryCode = "") {
  await fetch(url + "?yesterday=false")
    .then((response) => response.json())
    .then((data) => {
      if (countryCode !== "") {
        dispatch({
          type: "SET_COUNTRY",
          payload: countryCode,
        });
      }
      dispatch({
        type: "SET_COUNTRY_DATA",
        payload: data,
      });
    });
}
