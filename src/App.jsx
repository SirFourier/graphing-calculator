import React from "react";
import Equations from "./Equations";
import Graph from "./Graph";

export default function App() {
  return (
    <div className="app container">
      <Equations className="equations item"></Equations>
      <Graph className="graph item"></Graph>
    </div>
  );
}