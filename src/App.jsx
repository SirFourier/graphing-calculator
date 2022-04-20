import React, { useState, useEffect } from "react";
import API from "./API";
import SearchQuery from "./SearchQuery";
import Temperature from "./Temperature";

export default function App() {
  const [query, setQuery] = useState({
    city: { name: "" },
    coordinates: { latitude: "", longitude: "" },
  });
  const [queryType, setQueryType] = useState("city");
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState("");

  const handleInputChange = (id, e) => {
    setQuery(({ ...newQuery }) => {
      newQuery[queryType][id] = e.target.value;
      return newQuery;
    });
  };

  const handleSearch = async () => {
    try {
      const api = await fetch(API.queryBy(queryType, query));
      const data = await api.json();
      // if no errors thrown, set weather data
      setWeatherData(data);
    } catch (e) {
      // set error from the fetch API
      setError(e.message);
    }
  };

  useEffect(() => {
    // check status for any errors from the weather data
    setError(API.getStatus(weatherData));
  }, [weatherData]);

  return (
    <div className="container mt-5">
      <h1>Weather App</h1>
      <SearchQuery
        query={query}
        selectedQueryType={queryType}
        onRadioChange={setQueryType}
        onInputChange={handleInputChange}
        error={error}
        onSearch={handleSearch}
      />
      {API.isOK(weatherData) && (
        <Temperature
          temp={API.getTemp(weatherData)}
          name={API.getCity(weatherData)}
          country={API.getCountry(weatherData)}
        />
      )}
    </div>
  );
}
