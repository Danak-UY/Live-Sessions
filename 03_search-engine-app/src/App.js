import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search"></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
