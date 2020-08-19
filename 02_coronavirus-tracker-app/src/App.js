import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./connections/reducer";

import "./App.css";

import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import StatsCardsList from "./components/StatsCardsList";
import StatsMap from "./components/StatsMap";
import StatsTable from "./components/StatsTable";

const initialState = {
  countriesList: [],
  countryData: [],
  countriesData: [],
  selectedCountry: "worldwide",
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
            <StatsMap title="Covid-19 Affected Areas" />
            <StatsTable />
          </section>
        </Wrapper>
      </div>
    </Provider>
  );
}

export default App;
