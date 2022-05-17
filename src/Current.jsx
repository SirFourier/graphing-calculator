import React from "react";
import { useWeather } from "./helper/WeatherContext";
import { capitliseFirstLetter } from "./utilities";
import { getUnitsCode } from "./utilities";

// show current weather
export default function Current(props) {
  const { weather } = useWeather();
  const { temp, units, current, country, city, timezone } = weather;
  const { dt, feels_like, humidity, pressure } = current;
  const { description } = current.weather[0];
  const unitsCode = getUnitsCode(units);

  const now = new Date(dt * 1000);
  const locale = now.toLocaleString("en-" + country, {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: timezone,
    hour12: true,
  });

  return (
    <div {...props}>
      <p className="lead fs-4" style={{ margin: "0" }}>
        {locale} <br />
        <b>
          {city}, {country}
        </b>
      </p>
      <p style={{ fontSize: "7em", margin: "0" }}>
        {Math.round(temp)}
        {unitsCode}
      </p>
      <p className="lead fs-5">
        Feels like: {Math.round(feels_like)}
        {unitsCode}.
        <br />
        {capitliseFirstLetter(description)}.
        <br />
        Humidity: {humidity}%.
        <br />
        Pressure: {pressure} hPa.
      </p>
    </div>
  );
}
