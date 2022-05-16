import React from "react";
import { useWeather } from "./helper/WeatherContext";
import { getUnitsCode } from "./utilities";

// show current weather
export default function Current() {
  const { weather } = useWeather();
  const { temp, units, current, country, city, timezone } = weather;
  const { dt, feels_like, humidity, pressure } = current;
  const { main, description } = current.weather[0];
  const unitsCode = getUnitsCode(units);
  const now = new Date(dt * 1000);

  return (
    <div className="current">
      <p className="lead">
        {now.toString()} <br />
        {city}, {country}
      </p>
      <p className="lead"></p>
      <p className="temp">
        {Math.round(temp)}
        {unitsCode}
      </p>
      <p className="lead">
        Feels like: {feels_like}
        {unitsCode}. {main}, {description}. <br />
        Humidity: {humidity}%. Pressure: {pressure} hPa.
      </p>
    </div>
  );
}
