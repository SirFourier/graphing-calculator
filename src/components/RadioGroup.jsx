import React from "react";
import PropTypes from "prop-types";
import capitliseFirstLetter from "./../utilities";

export default function RadioGroup({ options, checked, onChange }) {
  return (
    <div
      className="btn-group mb-2"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      {options.map((option) => (
        <React.Fragment key={option}>
          <input
            type="radio"
            className="btn-check"
            id={option}
            autoComplete="off"
            onChange={() => onChange(option)}
            checked={checked === option}
          />
          <label className="btn btn-outline-primary" htmlFor={option}>
            {capitliseFirstLetter(option)}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  checked: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
