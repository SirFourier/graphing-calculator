import React, { useState } from "react";
import Input from "./components/Input";

// Using openweathermap.org
const API_KEY = "5d5c88002278a4fbef29d7752e855e0e";

const getAPI_RequestString = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

const emptyQueryData = {
  country: "",
  city: "",
};

export default function App() {
  const [queryData, setQueryData] = useState(emptyQueryData);
  const [responseData, setResponseData] = useState({});

  const handleChange = (id, e) => {
    const newData = { ...queryData };
    newData[id] = e.target.value;
    setQueryData(newData);
  };

  const handleSearch = async () => {
    const api = await fetch(getAPI_RequestString(queryData.city));
    const data = await api.json();

    const newResponseData = { ...responseData, ...data.main };
    setResponseData(newResponseData);
  };

  return (
    <div className="container mt-5">
      <h1 align="center">Weather App</h1>
      {Object.keys(queryData).map((key) => (
        <Input
          key={key}
          id={key}
          label={key}
          type="text"
          placeholder="Input text here"
          value={queryData[key]}
          onChange={handleChange}
        />
      ))}
      <button className="btn btn-primary align-self-end" onClick={handleSearch}>
        Search
      </button>
      {Object.keys(responseData).map((key) => (
        <p key={key}>
          {key}: {responseData[key]}
        </p>
      ))}
    </div>
  );
}
