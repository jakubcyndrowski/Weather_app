import React from "react";
import "./Home.css";
import Footer from "../footer";
import WeatherInPlaces from "../WeatherInPlaces/WeatherInPlaces";

import { useState } from "react";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="home-container">
        <div className="icon-weather-container">
          <img alt="weather" className="icon-weather" src="img2.jpg" />
          <span className="weather-introduction">
            Check weather in the most popular places or serach for wherever you
            want
          </span>
        </div>
        <div className="world-weather">
          <WeatherInPlaces
            className="lefts"
            coordinates={{
              name: "Warsaw",
              lat: 52.216358,
              lon: 21.001251,
            }}
          />
          <WeatherInPlaces
            coordinates={{
              name: "Tokyo",
              lat: 35.689487,
              lon: 139.691711,
            }}
          />
          <WeatherInPlaces
            className="lefts"
            coordinates={{
              name: "New York",
              lat: 40.712776,
              lon: -74.005974,
            }}
          />
          <WeatherInPlaces
            coordinates={{
              name: "Delhi",
              lat: 28.70406,
              lon: 77.102493,
            }}
          />
          <WeatherInPlaces
            className="lefts"
            coordinates={{
              name: "Seul",
              lat: 37.566536,
              lon: 126.977966,
            }}
          />
          <WeatherInPlaces
            className="lefts"
            coordinates={{
              name: "Mumbai",
              lat: 19.075983,
              lon: 72.877655,
            }}
          />
          <WeatherInPlaces
            coordinates={{
              name: "London",
              lat: 51.5072,
              lon: 0.1276,
            }}
          />
          <WeatherInPlaces
            className="lefts"
            coordinates={{
              name: "Rio de Janeiro",
              lat: -22.920832,
              lon: -43.217681,
            }}
          />
          <WeatherInPlaces
            coordinates={{
              name: "Shanghaj",
              lat: 31.23097460541716,
              lon: 121.4972928166238,
            }}
          />
          <WeatherInPlaces
            className="lefts"
            coordinates={{
              name: "Moscow",
              lat: 55.74920588112047,
              lon: 37.64001334378443,
            }}
          />
          <WeatherInPlaces
            coordinates={{
              name: "Jakarta",
              lat: -6.205821332683766,
              lon: 106.82515108043121,
            }}
          />
          <WeatherInPlaces
            className="lefts"
            coordinates={{
              name: "Paris",
              lat: 48.85424547438949,
              lon: 2.3478742943986965,
            }}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
