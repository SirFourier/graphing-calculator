import React, { useState } from "react";
import SearchQuery from "./SearchQuery";
import Temperature from "./Temperature";

const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

export default function App() {
  const [weather, setWeather] = useState({});
  const { isOK, getTemp, getCity, getCountry } = weather;

  const handleWeatherChange = (data) => {
    setWeather((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <div className="container mt-5">
      <h1>Weather App</h1>
      <SearchQuery onSubmit={handleWeatherChange} />
      {isOK() && (
        <Temperature temp={getTemp()} name={getCity()} country={getCountry()} />
      )}
    </div>
  );
}
