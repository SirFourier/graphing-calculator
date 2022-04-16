import React, { useState } from "react";
import MultipleInputs from "./components/MultipleInputs";
import RadioGroup from "./components/RadioGroup";
import ErrorBox from "./components/ErrorBox";
import Temperature from "./Temperature";

// Using openweathermap.org
const API = {
  KEY: "5d5c88002278a4fbef29d7752e855e0e",
  UNITS: "metric",
  ROOT: "https://api.openweathermap.org/data/2.5/weather?",
  query: (format) => `${API.ROOT}${format}&appid=${API.KEY}&units=${API.UNITS}`,
  queryBy: (type) => {
    switch (type) {
      case "city":
        return ({ name }) => API.query(`q=${name}`);
      case "coordinates":
        return ({ latitude, longitude }) =>
          API.query(`lat=${latitude}&lon=${longitude}`);
      default:
        console.log("Query type not available");
    }
  },
  getMain: (data) => data.main,
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

  const handleChange = (id, e) => {
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
      const api = await fetch(API.queryBy(queryType)(query[queryType]));
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
      <MultipleInputs
        type="text"
        values={query[queryType]}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      <ErrorBox message={error} />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
      {API.getMain(weather) && (
        <Temperature
          temp={API.getTemp(weather)}
          name={API.getCity(weather)}
          country={API.getCountry(weather)}
        />
      )}
    </div>
  );
}
