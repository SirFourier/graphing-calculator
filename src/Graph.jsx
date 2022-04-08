import React, { useRef, useEffect } from "react";

export default function Graph() {
  const canvasRef = useRef(null);

  const handleClear = () => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    const { width, height } = c;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    // define measurements;
    const halfOfWidth = width / 2;
    const halfOfHeight = height / 2;
    const axisLineWidth = 0.01 * width;
    const thickLineWidth = 0.002 * width;
    const thinLineWidth = 0.002 * width;
    const gapDivisor = 10;
    const verticalGap = height / gapDivisor;
    const horizontalGap = width / gapDivisor;

    // Add grid lines
    // add x-axis
    ctx.beginPath();
    ctx.lineWidth = axisLineWidth;
    ctx.moveTo(0, halfOfHeight);
    ctx.lineTo(width, halfOfHeight);
    ctx.stroke();

    // add y-axis
    ctx.beginPath();
    ctx.moveTo(halfOfWidth, 0);
    ctx.lineTo(halfOfWidth, height);
    ctx.stroke();

    // add x-axis grid lines
    ctx.lineWidth = thickLineWidth;
    let xStart = 0;
    let yStart = halfOfHeight - verticalGap;
    // draw upper half of x-axis grid lines
    while (yStart > 0) {
      ctx.beginPath();
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(width, yStart);
      ctx.stroke();
      yStart -= verticalGap;
    }
    yStart = halfOfHeight + verticalGap;
    // draw lower half of x-axis grid lines
    while (yStart < height) {
      ctx.beginPath();
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(width, yStart);
      ctx.stroke();
      yStart += verticalGap;
    }

    // add y-axis grid lines
    xStart = halfOfWidth - horizontalGap;
    yStart = 0;
    // draw left half of y-axis grid lines
    while (xStart > 0) {
      ctx.beginPath();
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xStart, height);
      ctx.stroke();
      xStart -= horizontalGap;
    }
    xStart = halfOfWidth + horizontalGap;
    // draw right half of y-axis grid lines
    while (xStart < width) {
      ctx.beginPath();
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xStart, height);
      ctx.stroke();
      xStart += horizontalGap;
    }
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
