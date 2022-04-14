import React, { useState } from "react";
import Input from "./components/Input";

// Using openweathermap.org
const API_KEY = "5d5c88002278a4fbef29d7752e855e0e";

const getAPI_RequestString = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

const emptyQueryData = {
  City: "",
};

export default function App() {
  const [queryData, setQueryData] = useState(emptyQueryData);
  const [responseData, setResponseData] = useState({});
  const [errorData, setErrorData] = useState("");

  const handleChange = (id, e) => {
    const newData = { ...queryData };
    newData[id] = e.target.value;
    setQueryData(newData);
  };

  const handleError = ({ cod, message }) => {
    if (cod >= 400 && cod <= 599) {
      // client or server error response
      throw new Error(`${cod}, Message: ${message}`);
    }
  };

  const handleSearch = async () => {
    try {
      const api = await fetch(getAPI_RequestString(queryData.City));
      const data = await api.json();

      // handle any error responses
      handleError(data);
      // if no errors thrown, set no errors
      setErrorData("");

      setResponseData({ ...responseData, ...data.main });

    } catch (e) {
      console.error(e);
      setErrorData(e.toString());
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="container mt-5">
      <h1>Weather App</h1>
      <div className="row">
        <div className="col">
          {Object.keys(queryData).map((key) => (
            <Input
              key={key}
              id={key}
              label={key}
              type="text"
              placeholder="Input text here"
              value={queryData[key]}
              onChange={handleChange}
              onKeyDown={handleEnter}
            />
          ))}
          {errorData && (
            <div className="alert alert-danger" role="alert">
              {errorData}
            </div>
          )}
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="col">
          <p className="temp">{responseData.temp}</p>
          <span className="temp">&#8451;</span>
        </div>
      </div>
    </div>
  );
}
