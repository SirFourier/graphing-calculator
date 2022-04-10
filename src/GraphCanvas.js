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
    this.spacingDivisor = 20;
    this.gridSpacing = this.width / this.spacingDivisor;

    // define the scale (how many pixels per grid spacing)
    this.scale = 2;

    // define different line widths
    this.axisLineWidth = 0.01 * this.width;
    this.thickLineWidth = 0.002 * this.width;
    this.thinLineWidth = 0.002 * this.width;

    // font parameters
    this.fontSize = 0.4 * this.gridSpacing;
    this.xFontOffset = 0.3 * this.gridSpacing;
    this.yFontOffset = 0.5 * this.gridSpacing;
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

  drawNumber = (number, x, y, x_axis) => {
    const { ctx, xCenter, yCenter, xFontOffset, yFontOffset } = this;

    if (x_axis) {
      const width = ctx.measureText(number.toString()).width;
      ctx.fillText(
        number.toString(),
        x + xCenter,
        -(y - yFontOffset) + yCenter
      );
    } else {
      ctx.fillText(
        number.toString(),
        x + xCenter + xFontOffset,
        -(y) + yCenter
      );
    }
  };

  // draw grid lines and the numbers
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
      fontSize,
      scale,
      drawNumber,
    } = this;

    // set style
    ctx.fillStyle = "black";
    ctx.font = `${fontSize}px Arial`;
    ctx.lineWidth = thickLineWidth;

    // draw positive x-axis grid lines
    let currentNumber = 0;
    let x = 0;
    while (x < xMax) {
      drawLine(x, yMin, x, yMax);
      drawNumber(currentNumber, x, 0, true);
      currentNumber += scale;
      x += gridSpacing;
    }

    // draw negative x-axis grid lines
    x = -gridSpacing;
    currentNumber = -scale;
    while (x > xMin) {
      drawLine(x, yMin, x, yMax);
      drawNumber(currentNumber, x, 0, true);
      currentNumber -= scale;
      x -= gridSpacing;
    }

    // draw positive y-axis grid lines
    let y = gridSpacing;
    currentNumber = scale;
    while (y < yMax) {
      drawLine(xMin, y, xMax, y);
      drawNumber(currentNumber, 0, y, false);
      currentNumber += scale;
      y += gridSpacing;
    }

    // draw negative y-axis grid lines
    y = -gridSpacing;
    currentNumber = -scale;
    while (y > yMin) {
      drawLine(xMin, y, xMax, y);
      drawNumber(currentNumber, 0, y, false);
      currentNumber -= scale;
      y -= gridSpacing;
    }
  };

  // clear the grid
  clear = () => {
    const { ctx, width, height, drawAxis, drawGridLines } = this;
    // clear canvas with white
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

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
