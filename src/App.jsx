import React, { useState } from "react";
import SearchQuery from "./SearchQuery";
import Temperature from "./Temperature";

export default function App() {
  const [weather, setWeather] = useState({});
  const { OK, temp, name, country } = weather;

  const handleWeatherChange = (data) => {
    setWeather((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <div className="container mt-5">
      <h1>Weather App</h1>
      <SearchQuery onSubmit={handleWeatherChange} />
      {OK && <Temperature temp={temp} name={name} country={country} />}
    </div>
  );
}
