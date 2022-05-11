import React from "react";
import PropTypes from "prop-types";

export default function Input({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  onKeyDown,
  onDelete,
}) {
  return (
    <div className="input-group flex-nowrap mb-2">
      {label && <span className="input-group-text">{label}</span>}
      <input
        className="form-control"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e, id)}
        onKeyDown={(e) => onKeyDown(e)}
      />
      {onDelete && (
        <button className="btn btn-outline-danger" onClick={() => onDelete(id)}>
          Delete
        </button>
      )}
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  onDelete: PropTypes.func,
};
