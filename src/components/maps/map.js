import { MAPS_API_KEY, WEATHER_API_KEY } from "../api";
import { useState, useEffect } from "react";

export default function Map() {
  const [currentMap, setCurrentMap] = useState("clouds_new");
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    fetch(
      `${MAPS_API_KEY}${"precipitation_new"}/${0}/${0}/${0}.png?appid=${WEATHER_API_KEY}`
    )
      .then((response) => response.blob())
      .then((result) => {
        const imageURL = URL.createObjectURL(result);
        console.log(imageURL);
        setImageURL(imageURL);
      })
      .catch((error) =>
        console.error("Błąd podczas pobierania danych:", error)
      );
  }, []); // Pusta tablica zależności zapewnia, że efekt zostanie uruchomiony tylko raz po początkowym renderowaniu

  return (
    <div className="map-container">
      <button className="map-type"></button>
      <button className="map-type"></button>
      <button className="map-type"></button>
      <button className="map-type"></button>
      <button className="map-type"></button>
      {imageURL && <img src={imageURL} alt="WeatherMap" />}
    </div>
  );
}
