import React, { useRef, useEffect } from "react";
import GraphCanvas from "./GraphCanvas";

export default function Graph() {
  const canvasRef = useRef(null);
  const graphRef = useRef(new GraphCanvas());

  useEffect(() => {
    graphRef.current.set(canvasRef.current);
    graphRef.current.clear();
  });

  return (
    <div className="graph">
      <canvas ref={canvasRef} width={500} height={500}></canvas>
      <br />
      <button onClick={graphRef.current.clear}>Clear</button>
      <button onClick={graphRef.current.drawCircle}>Draw Circle</button>
    </div>
  );
}


  // const handleClear = () => {


  //   // // test by drawing a graph
  //   // // draw x^2
  //   // const pointCount = 20; // points to draw

  //   // // shift center
  //   // ctx.translate(xCenter, yCenter);

  //   // // define x-delta
  //   // const xDelta = width / pointCount;

  //   // // define starting x coordinate
  //   // let x = -xCenter;

  //   // ctx.beginPath();
  //   // ctx.moveTo(x, x ** 2);
  //   // while (x < xCenter) {
  //   //   ctx.lineTo(x, x ** 2);
  //   //   x += xDelta;
  //   // }
  //   // ctx.stroke();

  // };

