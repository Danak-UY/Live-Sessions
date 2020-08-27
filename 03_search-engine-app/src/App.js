import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <ResultPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
