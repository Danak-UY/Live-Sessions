export default function reducer(state, action) {
  switch (action.type) {
    case "SET_COUNTRIES_LIST": {
      return { ...state, countriesList: action.payload };
    }
    case "SET_COUNTRY": {
      return { ...state, selectedCountry: action.payload };
    }
    default: {
      return { ...state };
    }
  }
}
