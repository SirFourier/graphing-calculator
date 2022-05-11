import React from "react";
import PropTypes from "prop-types";
import capitliseFirstLetter from "../utilities";

//{ metric: true, imperial: false }

export default function InlineRadio({ options, onChange }) {
  return (
    <React.Fragment>
      {Object.keys(options).map((key) => (
        <React.Fragment key={key}>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id={key}
              autoComplete="off"
              checked={options[key]}
              onChange={() => onChange(key)}
            />
            <label className="form-check-label" htmlFor={key}>
              {capitliseFirstLetter(key)}
            </label>
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

InlineRadio.propTypes = {
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
