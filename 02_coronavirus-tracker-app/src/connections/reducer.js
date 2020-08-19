export default function reducer(state, action) {
  switch (action.type) {
    case "SET_COUNTRIES_LIST": {
      return { ...state, countriesList: action.payload };
    }
    case "SET_COUNTRIES_DATA": {
      const countries = action.payload.map((item) => ({
        name: item.country,
        value: item.countryInfo.iso3,
      }));
      return {
        ...state,
        countriesData: action.payload,
        countriesList: countries,
      };
    }
    case "SET_COUNTRY": {
      return { ...state, selectedCountry: action.payload };
    }
    case "SET_COUNTRY_DATA": {
      const data = action.payload.data;
      const countryCode = action.payload.countryCode || "worldwide";
      return { ...state, countryData: data, selectedCountry: countryCode };
    }
    default: {
      return { ...state };
    }
  }
}
