import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./connections/reducer";

import "./App.css";
import "leaflet/dist/leaflet.css";

import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import StatsCardsList from "./components/StatsCardsList";
import StatsTabs from "./components/StatsTabs";
import StatsTable from "./components/StatsTable";

const initialState = {
  countriesList: [],
  countryData: [],
  countriesData: [],
  continentsData: [],
  countriesContinentData: [],
  graphData: [],
  allStatsData: [],
  selectedCountry: "worldwide",
  filterStat: "cases",
  filterContinent: "worldwide",
  casesType: "cases",
  historicalDays: 30,
  lastUpdate: "",
  APIURL: "https://disease.sh/v3/covid-19",
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Wrapper>
          <StatsCardsList />
          <section className="app__content">
            <StatsTabs />
            <StatsTable />
          </section>
        </Wrapper>
      </div>
    </Provider>
  );
}

export default App;
