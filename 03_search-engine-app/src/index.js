import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./components/StateProvider";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import reducer from "./reducer";

const initialState = {
  query: window.location.search
    ? decodeURIComponent(
        window.location.search.match(/(\?|&)q\=([^&]*)/)[2]
      ).replaceAll("-", " ")
    : "",
  avatarProfiles: [],
};

ReactDOM.render(
  <React.Fragment>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
