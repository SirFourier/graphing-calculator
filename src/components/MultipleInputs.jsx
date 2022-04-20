import React from "react";
import PropTypes from "prop-types";

export default function MultipleInputs({
  type,
  mainLabel,
  values,
  onKeyDown,
  onChange,
}) {
  return (
    <div className="input-group mb-2">
      {mainLabel && <span className="input-group-text">{mainLabel}</span>}
      {Object.keys(values).map((key) => (
        <input
          key={key}
          type={type}
          value={values[key]}
          aria-label={key}
          placeholder={key}
          className="form-control"
          onKeyDown={(e) => onKeyDown(e)}
          onChange={(e) => onChange(key, e)}
        />
      ))}
    </div>
  );
}

MultipleInputs.propTypes = {
  type: PropTypes.string.isRequired,
  mainLabel: PropTypes.string,
  values: PropTypes.object.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
