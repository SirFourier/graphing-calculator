import React from "react";
import Current from "./Current";
import Daily from "./Daily";

// contains current and and daily weather
export default function Weather() {
  return (
    <div className="container">
      <div className="mt-3 row">
        <Current
          className="col-auto"
        />
        <Daily className="col" />
      </div>
    </div>
  );
}
