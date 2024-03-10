import React from "react";
import CurrentWeather from "../current-weather/current-weather";
import Forecast from "../forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../api";
import { useState } from "react";
import Search from "../search";
import "./WeatherSearch.css";
import Footer from "../footer";

export default function WeatherSearch() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric` //zamiana na celsjusze bo domyślnie farenchaity
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch]) //tworzymy promise  z dwóch fetch naraz
      .then(async (response) => {
        const weatherResposne = await response[0].json();
        const forecastResposne = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResposne }); //wrzucamy nową rzecz do danych, żeby miec nazwe city
        setForecast({ city: searchData.label, ...forecastResposne });
      })
      .catch((err) => console.error(err));
  };

  console.log(currentWeather);
  console.log(forecast);
  //onSearchCh ange={handleOnSearchChange} wywołujemy funckje w componentise Search
  return (
    <div className="weather-container">
      <div className="icon-weather-container">
        <img alt="weather" className="icon-weather" src="img2.jpg" />
        <div className="search-container">
          <Search onSearchChange={handleOnSearchChange} />
        </div>
      </div>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      <Footer />
    </div>
  );
}
