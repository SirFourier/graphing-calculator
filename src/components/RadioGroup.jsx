import React from "react";

const capitliseFirstLetter = (string) =>
  string[0].toUpperCase() + string.slice(1);

export default function RadioGroup({ options, checked, onChange }) {
  const keys = Object.keys(options);

  return (
    <div
      className="btn-group mb-2"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        className="btn-check"
        name={keys[0]}
        id={keys[0]}
        autoComplete="off"
        onChange={() => onChange(keys[0])}
        checked={checked === keys[0]}
      />
      <label className="btn btn-outline-primary" htmlFor={keys[0]}>
        {capitliseFirstLetter(keys[0])}
      </label>

      <input
        type="radio"
        className="btn-check"
        name={keys[1]}
        id={keys[1]}
        autoComplete="off"
        onChange={() => onChange(keys[1])}
        checked={checked === keys[1]}
      />
      <label className="btn btn-outline-primary" htmlFor={keys[1]}>
        {capitliseFirstLetter(keys[1])}
      </label>
    </div>
  );
}
