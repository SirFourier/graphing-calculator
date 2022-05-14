import React, { useState } from "react";
import SearchQuery from "./SearchQuery";
import Temperature from "./Temperature";

export default function App() {
  const [{ OK, temp, units, city, country }, setWeather] = useState({});

  const handleWeatherChange = (data) => {
    setWeather((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <div className="container mt-5">
      <h1>Weather App</h1>
      <SearchQuery onSubmit={handleWeatherChange} />
      {OK && <Temperature {...{ temp, units, city, country }} />}
    </div>
  );
}
