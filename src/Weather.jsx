import React from "react";
import Current from "./Current";
import Daily from "./Daily";

// contains current and and daily weather
export default function Weather() {
  return (
    <div>
      <Current />
      <Daily />
    </div>
  );
}
