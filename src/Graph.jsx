import React from 'react';
import useGraph from "./useGraph"

export default function Graph() {
  const [graph, canvasRef] = useGraph();

  return (
    <div className="graph">
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
      <br />
      <button onClick={graph.clear}>Clear</button>
      <button onClick={graph.drawCircle}>Draw Circle</button>
    </div>
  );
}