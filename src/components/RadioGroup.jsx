import React from "react";
import PropTypes from "prop-types";
import capitliseFirstLetter from "../utilities";

export default function RadioGroup({ options, checked, onChange }) {
  return (
    <div
      className="btn-group mb-2"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      {Object.keys(options).map((key) => (
        <React.Fragment key={key}>
          <input
            type="radio"
            className="btn-check"
            id={key}
            name={key}
            autoComplete="off"
            onChange={() => onChange(key)}
            checked={checked === key}
          />
          <label className="btn btn-outline-primary" htmlFor={key}>
            {capitliseFirstLetter(key)}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}

RadioGroup.propTypes = {
  options: PropTypes.object.isRequired,
  checked: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
