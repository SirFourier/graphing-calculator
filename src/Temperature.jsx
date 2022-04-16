import React from "react";

export default function Temperature({ temp, name, country }) {
  return (
    <div>
      <p className="temp">{Math.round(temp)}</p>
      <span className="temp">&#8451;</span>
      <p>
        {name}, {country}
      </p>
    </div>
  );
}
