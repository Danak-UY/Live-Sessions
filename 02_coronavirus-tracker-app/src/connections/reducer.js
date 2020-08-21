import { sortDataByField } from "./../components/functions/fuctions";

export default function reducer(state, action) {
  switch (action.type) {
    case "SET_COUNTRIES_DATA": {
      const allContriesData = action.payload;
      const countries = allContriesData.map((item) => ({
        name: item.country,
        value: item.countryInfo.iso3,
      }));
      return {
        ...state,
        countriesData: sortDataByField(allContriesData, state.filterStat),
        countriesList: countries,
      };
    }

    case "SET_COUNTRY_DATA": {
      const data = action.payload.data;
      const countryCode = action.payload.countryCode || "worldwide";
      const allData = countryCode === "worldwide" ? data : state.allStatsData;
      return {
        ...state,
        countryData: data,
        selectedCountry: countryCode,
        lastUpdate: data.updated,
        allStatsData: allData,
      };
    }

    case "SET_CONTINENTS_DATA": {
      return {
        ...state,
        continentsData: action.payload.sort(
          (a, b) => a.continent > b.continent
        ),
      };
    }

    case "SET_GRAPH_DATA": {
      return { ...state, graphData: action.payload };
    }

    case "SET_CATEGORY_TYPE": {
      return { ...state, casesType: action.payload };
    }

    case "SET_HISTORY_DAYS": {
      return { ...state, historicalDays: action.payload };
    }

    case "SET_FILTER_STAT": {
      const statSelected = action.payload;

      return {
        ...state,
        countriesData: sortDataByField(state.countriesData, statSelected),
        countriesContinentData: sortDataByField(
          state.countriesContinentData,
          statSelected
        ),
        filterStat: statSelected,
      };
    }

    case "SET_FILTER_CONTINENT": {
      const continentSelected = action.payload;
      let continentData = [];
      if (continentSelected !== "worldwide") {
        continentData = state.countriesData.filter(
          (country) => country.continent === continentSelected
        );
      }

      return {
        ...state,
        filterContinent: continentSelected,
        countriesContinentData: sortDataByField(
          continentData,
          state.filterStat
        ),
      };
    }

    default: {
      return { ...state };
    }
  }
}
