import React, { useState } from "react";
import Temperature from "./Temperature";
import SearchQuery from "./SearchQuery";

// using openweathermap.org
// this contains constants and interfaces with the API
const API = {
  ROOT: "https://api.openweathermap.org/data/2.5/weather?",
  KEY: "5d5c88002278a4fbef29d7752e855e0e",
  UNITS: "metric",
  query(format) {
    return `${this.ROOT}${format}&appid=${this.KEY}&units=${this.UNITS}`;
  },
  queryBy(type, query) {
    switch (type) {
      case "city":
        const city = query.city;
        return this.query(`q=${city.name}`);
      case "coordinates":
        const coordinates = query.coordinates;
        const { latitude, longitude } = coordinates;
        return this.query(`lat=${latitude}&lon=${longitude}`);
      default:
        console.log("Query type not available");
    }
  },
  isOK: (data) => data.cod === 200,
  getCity: (data) => data.name,
  getCountry: (data) => data.sys.country,
  getTemp: (data) => data.main.temp,
};

const emptyQuery = {
  city: { name: "" },
  coordinates: { latitude: "", longitude: "" },
};

//london
//lat: 51.509865
//lon: -0.118092

export default function App() {
  const [query, setQuery] = useState(emptyQuery);
  const [queryType, setQueryType] = useState("city");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const handleInputChange = (id, e) => {
    const newQuery = { ...query };
    newQuery[queryType][id] = e.target.value;
    setQuery(newQuery);
  };

  const handleError = ({ cod, message }) => {
    if (cod >= 400 && cod <= 599) {
      // client or server error response
      throw new Error(`Error: ${cod}, Message: ${message}`);
    }
  };

  const handleSearch = async () => {
    try {
      const api = await fetch(API.queryBy(queryType, query));
      const data = await api.json();

      // handle any error responses
      handleError(data);
      // if no errors thrown, set no errors
      setError("");
      console.log(data);

      setWeather(data);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleRadioChange = (key) => {
    setQueryType(key);
  };

  return (
    <div className="container mt-5">
      <h1>Weather App</h1>
      <SearchQuery
        query={query}
        selectedQueryType={queryType}
        onRadioChange={handleRadioChange}
        onInputChange={handleInputChange}
        error={error}
        onSearch={handleSearch}
      />
      {API.isOK(weather) && (
        <Temperature
          temp={API.getTemp(weather)}
          name={API.getCity(weather)}
          country={API.getCountry(weather)}
        />
      )}
    </div>
  );
}
