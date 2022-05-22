import React from "react";
import SearchQuery from "./SearchQuery";
import Weather from "./Weather";
import Spinner from "./components/Spinner"
import { useWeather } from "./helper/WeatherContext";

export default function App() {
  const { weather } = useWeather();
  console.log(weather);

  return (
    <div className="container mt-5">
      <h1>Weather App</h1>
      <SearchQuery />
      {(weather?.OK && <Weather />) || <Spinner />}
    </div>
  );
}
