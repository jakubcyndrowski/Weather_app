import { WEATHER_API_URL, WEATHER_API_KEY } from "../api";
import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";

export default function WeatherSearch(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${WEATHER_API_URL}/weather?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.coordinates.lat, props.coordinates.lon]); // Zmienione z [data] na [prop

  return (
    <div className="weather">
      {data && (
        <>
          <div className="top">
            <div>
              <p className="city">{props.coordinates.name}</p>
              <p className="weather-description">
                {data.weather[0].description}
              </p>
            </div>
            <img
              alt="weather"
              className="weather-icon"
              src={`icons/${data.weather[0].icon}.png`}
            />
          </div>
          <div className="bottom">
            <p className="temperature">{Math.round(data.main.temp)}*C</p>
            <div className="details">
              <div className="parameter-row">
                <span className="parameter-label">Details</span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Feels like: </span>
                <span className="parameter-value">
                  {Math.round(data.main.feels_like)}*C
                </span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Wind: </span>
                <span className="parameter-value">{data.wind.speed}m/s</span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Humidity: </span>
                <span className="parameter-value">{data.main.humidity}%</span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Pressure: </span>
                <span className="parameter-value">{data.main.pressure}hpa</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
