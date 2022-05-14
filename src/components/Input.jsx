import React from "react";
import PropTypes from "prop-types";

export default function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
  onKeyDown,
  children,
}) {
  return (
    <div className="input-group flex-nowrap mb-2">
      {label && <span className="input-group-text">{label}</span>}
      <input
        className="form-control"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
      />
      {children}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
};
