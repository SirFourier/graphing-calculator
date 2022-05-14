import React from "react";
import { useWeather } from "./helper/WeatherContext";
import { UNITS } from "./API";
const { METRIC, IMPERIAL } = UNITS;

export default function Temperature() {
  const { weather } = useWeather();
  const { temp, units, city, country } = weather;
  const getCode = () => {
    switch (units) {
      case METRIC:
        return "\u2103";
      case IMPERIAL:
        return "\u2109";
      default:
        return " ?";
    }
  };

  return (
    <div>
      <p className="temp">{Math.round(temp)}</p>
      <span className="temp">{getCode()}</span>
      <p>
        {city}, {country}
      </p>
    </div>
  );
}
