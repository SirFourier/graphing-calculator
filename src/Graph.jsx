import React, { useRef, useEffect } from "react";

export default function Graph() {
  const canvasRef = useRef(null);

  const handleClear = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const handleDrawCircle = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "black";
    context.beginPath();
    context.arc(50, 100, 20, 0, 2 * Math.PI);
    context.fill();
  };

  useEffect(() => {
    handleClear();
  });

  return (
    <div className="graph">
      <canvas ref={canvasRef} width={500} height={500}></canvas>
      <br />
      <button onClick={handleDrawCircle}>Draw Circle</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
