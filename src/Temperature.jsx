import React from "react";
import PropTypes from "prop-types";
import { UNITS } from "./API";
const { METRIC, IMPERIAL } = UNITS;

export default function Temperature({ temp, units, city, country }) {
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

Temperature.propTypes = {
  temp: PropTypes.number.isRequired,
  units: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
