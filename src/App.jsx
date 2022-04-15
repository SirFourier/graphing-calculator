import React, { useState } from "react";
import Input from "./components/Input";
import MultipleInputs from "./components/MultipleInputs";
import RadioGroup from "./components/RadioGroup";

// Using openweathermap.org
const API = {
  KEY: "5d5c88002278a4fbef29d7752e855e0e",
  UNITS: "metric",
  ROOT: "https://api.openweathermap.org/data/2.5/weather?",
  queryByCity: (city) =>
    `${API.ROOT}q=${city}&appid=${API.KEY}&units=${API.UNITS}`,
  queryByCoordinates: (lat, lon) =>
    `${API.ROOT}lat=${lat}&lon=${lon}&appid=${API.KEY}&units=${API.UNITS}`,
};

const emptyQuery = {
  city: "",
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

  const handleChange = (id, e) => {
    const newQuery = { ...query };
    if (id === "city") {
      newQuery[id] = e.target.value;
    } else if (id === "latitude" || id === "longitude") {
      newQuery.coordinates[id] = e.target.value;
    }
    setQuery(newQuery);
  };

  const handleError = ({ cod, message }) => {
    if (cod >= 400 && cod <= 599) {
      // client or server error response
      throw new Error(`${cod}, Message: ${message}`);
    }
  };

  const handleSearch = async () => {
    try {
      const api = await fetch(
        queryType === "city"
          ? API.queryByCity(query.city)
          : API.queryByCoordinates(
              query.coordinates.latitude,
              query.coordinates.longitude
            )
      );
      const data = await api.json();

      // handle any error responses
      handleError(data);
      // if no errors thrown, set no errors
      setError("");
      console.log(data);

      setWeather({ ...weather, ...data });
    } catch (e) {
      console.error(e);
      setError(e.toString());
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleRadioChange = (key) => {
    setQueryType(key);
  };

  return (
    <div className="container mt-5">
      <h1>Weather App</h1>
      <RadioGroup
        options={query}
        checked={queryType}
        onChange={handleRadioChange}
      />

      {queryType === "city" ? (
        <Input
          id={"city"}
          label={"City"}
          type="text"
          placeholder="city, (country is optional)"
          value={query.city}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
      ) : (
        <MultipleInputs
          type="text"
          mainLabel="Coordinates"
          values={query.coordinates}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
      {weather.main && (
        <div>
          <p className="temp">{Math.round(weather.main.temp)}</p>
          <span className="temp">&#8451;</span>
          <p>
            {weather.name}, {weather.sys.country}
          </p>
        </div>
      )}
    </div>
  );
}
