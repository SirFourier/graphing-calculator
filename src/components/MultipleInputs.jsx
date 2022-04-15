import React from "react";

export default function MultipleInputs({
  type,
  mainLabel,
  values,
  onKeyDown,
  onChange,
}) {
  return (
    <div className="input-group mb-2">
      <span className="input-group-text">{mainLabel}</span>
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
