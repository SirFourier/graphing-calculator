import React, { useState, createContext, useContext } from "react";

export const WeatherContext = createContext({});

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState({});

  const updateWeather = (data) => {
    setWeather((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <WeatherContext.Provider value={{ weather, updateWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}
