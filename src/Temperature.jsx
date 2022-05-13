import React from "react";
import PropTypes from "prop-types";

export default function Temperature({ temp, name, country }) {
  return (
    <div>
      <p className="temp">{Math.round(temp)}</p>
      <span className="temp">&#8451;</span>
      <p>
        {name}, {country}
      </p>
    </div>
  );
}

Temperature.propTypes = {
  temp: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}