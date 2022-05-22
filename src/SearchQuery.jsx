import React, { useState, useEffect } from "react";
import { LOCATE_BY, UNITS, getOneCallData } from "./API";
import { useWeather } from "./helper/WeatherContext";
import RadioGroup from "./components/RadioGroup";
import Input from "./components/Input";
import ErrorBox from "./components/ErrorBox";

export default function SearchQuery() {
  const [selectedUnits, setSelectedUnits] = useState(UNITS.METRIC);
  const { updateWeather } = useWeather();
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const parseQuery = () => {
    const coordinates = query.match(/-?\d+.?\d+/g) || [];
    return coordinates.length > 1
      ? [LOCATE_BY.COORDINATES, coordinates.slice(0, 2)] // only take first 2 value
      : [LOCATE_BY.CITY, [query]];
  };

  const handleSearch = async () => {
    try {
      if (query === "") {
        const getWeatherData = async (position) => {
          const { latitude, longitude } = position.coords;
          updateWeather(
            await getOneCallData(
              LOCATE_BY.COORDINATES,
              selectedUnits,
              latitude,
              longitude
            )
          );
          setError(""); // clear error
        };
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(getWeatherData);
        } else {
          throw new Error("Could not get your location");
        }
      } else {
        const [queryType, values] = parseQuery();
        updateWeather(
          await getOneCallData(queryType, selectedUnits, ...values)
        );
        setError(""); // clear error
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, [selectedUnits]);

  return (
    <React.Fragment>
      <RadioGroup
        options={Object.values(UNITS)}
        checked={selectedUnits}
        onChange={setSelectedUnits}
      />
      <br />
      <Input
        type="text"
        placeholder="Search city by name or coordinates"
        value={query}
        onChange={handleChange}
        onKeyDown={handleEnter}
      >
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </Input>
      <ErrorBox message={error} />
    </React.Fragment>
  );
}
