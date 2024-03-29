import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import WeatherSearch from "./components/pages/WeatherSearch";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/weatherSearch" component={WeatherSearch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
