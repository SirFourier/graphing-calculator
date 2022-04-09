export default class GraphCanvas {
  set = (canvas) => {
    this.c = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = this.c.width;
    this.height = this.c.height;

    // clear canvas with white
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.width, this.height);

    // set center to be 0,0
    this.xCenter = this.width / 2;
    this.yCenter = this.height / 2;
    this.xMin = -this.xCenter;
    this.xMax = this.xCenter;
    this.yMin = -this.yCenter;
    this.yMax = this.yCenter;

    // make grid spacing based on width of graph
    this.spacingDivisor = 10;
    this.gridSpacing = this.width / this.spacingDivisor;

    this.axisLineWidth = 0.01 * this.width;
    this.thickLineWidth = 0.002 * this.width;
    this.thinLineWidth = 0.002 * this.width;
  };

  // draw line with shifted coordinates based on center and flipped x-axis (y coordinates)
  drawLine = (x1, y1, x2, y2) => {
    const { ctx, xCenter, yCenter } = this;
    ctx.beginPath();
    ctx.moveTo(x1 + xCenter, -y1 + yCenter);
    ctx.lineTo(x2 + xCenter, -y2 + yCenter);
    ctx.stroke();
  };

  drawAxis = () => {
    const { ctx, xMin, xMax, yMin, yMax, axisLineWidth, drawLine } = this;
    // add x-axis
    ctx.lineWidth = axisLineWidth;
    drawLine(xMin, 0, xMax, 0);

    // add y-axis
    drawLine(0, yMin, 0, yMax);
  };

  drawGridLines = () => {
    const {
      ctx,
      drawLine,
      gridSpacing,
      xMin,
      xMax,
      yMin,
      yMax,
      thickLineWidth,
    } = this;

    ctx.lineWidth = thickLineWidth;
    // draw positive x-axis grid lines
    let y = gridSpacing;
    while (y < yMax) {
      drawLine(xMin, y, xMax, y);
      y += gridSpacing;
    }

    // draw negative x-axis grid lines
    y = gridSpacing;
    while (y > yMin) {
      drawLine(xMin, y, xMax, y);
      y -= gridSpacing;
    }

    // draw positive y-axis grid lines
    let x = gridSpacing;
    while (x < xMax) {
      drawLine(x, yMin, x, yMax);
      x += gridSpacing;
    }

    // draw negative y-axis grid lines
    x = gridSpacing;
    while(x > xMin) {
      drawLine(x, yMin, x, yMax);
      x -= gridSpacing;
    }
  };

  // clear the grid
  clear = () => {
    const { drawAxis, drawGridLines } = this;
    drawAxis();
    drawGridLines();
  };

  drawCircle = () => {
    const { ctx } = this;
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(50, 100, 20, 0, 2 * Math.PI);
    ctx.fill();
  };
}
