import React from "react";
import ReactDOM from "react-dom/client";
import { WeatherProvider } from "./helper/WeatherContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>
);
