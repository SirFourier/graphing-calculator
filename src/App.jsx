import React from "react";
import Equations from "./Equations";
import Graph from "./Graph";

export default function App() {
  return (
    <div className="app container">
      <Graph className="graph item"></Graph>
      <Equations className="equations item"></Equations>
    </div>
  );
}