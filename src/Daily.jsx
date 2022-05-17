import React, { useContext } from "react";
import { WeatherContext } from "./helper/WeatherContext";
import { getUnitsCode } from "./utilities";

const getDateString = (dt, country) => {
  const now = new Date(dt * 1000);
  return now.toLocaleString("en-" + country, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

// contains daily weather
export default function Daily(props) {
  const { weather } = useContext(WeatherContext);
  const { daily, country, units } = weather;
  const unitsCode = getUnitsCode(units);

  return (
    <div {...props}>
      <table className="table table-striped">
        <thead>
          <tr className="table-dark">
            <th scope="col">8-Day Forecast</th>
            <th scope="col">Max/Min Temp</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {daily.map(({ dt, temp, weather }) => {
            const { max, min } = temp;
            const { description } = weather[0];
            return (
              <tr key={dt}>
                <th scope="row">{getDateString(dt, country)}</th>
                <td>
                  {Math.round(max)} / {Math.round(min)}
                  {unitsCode}
                </td>
                <td>{description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
