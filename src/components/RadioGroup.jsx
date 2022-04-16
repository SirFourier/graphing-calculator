import React from "react";

const capitliseFirstLetter = (string) =>
  string[0].toUpperCase() + string.slice(1);

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
