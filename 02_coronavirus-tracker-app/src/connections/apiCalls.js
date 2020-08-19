import { useDispatch } from "react-redux";

export async function getCountyData(url, countryCode = "") {
  const dispatch = useDispatch();
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
