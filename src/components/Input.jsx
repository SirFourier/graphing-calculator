import React from "react";

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
        onKeyDown={(e) => onKeyDown(e)}
        onChange={(e) => onChange(id, e)}
      />
      {onDelete && (
        <button className="btn btn-outline-danger" onClick={() => onDelete(id)}>
          Delete
        </button>
      )}
    </div>
  );
}
