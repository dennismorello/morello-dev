import { random } from "@/utils/numbers";

class Flake {
  constructor(x, y, radius, density, opacity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.density = density;
    this.opacity = opacity;
  }
}

const generateFlakes = (flakesCount, canvasWidth, canvasHeight) =>
  Array.from(
    { length: flakesCount },
    () =>
      new Flake(
        random(canvasWidth),
        random(canvasHeight),
        random(2, 7),
        random(2),
        random(0.5, 1)
      )
  );

export class SnowCanvas {
  constructor(flakesCount, canvasContext) {
    this.canvasContext = canvasContext;
    this.flakes = generateFlakes(
      flakesCount,
      canvasContext.canvas.clientWidth,
      canvasContext.canvas.clientHeight
    );
  }

  clearCanvas() {
    this.canvasContext.clearRect(
      0,
      0,
      this.canvasContext.canvas.clientWidth,
      this.canvasContext.canvas.clientHeight
    );
  }

  updateFlakesPositions() {
    for (const flake of this.flakes) {
      flake.y += flake.density ** 2 + 1;

      if (flake.y > this.canvasContext.canvas.clientHeight) {
        flake.x = random(this.canvasContext.canvas.clientWidth);
        flake.y = 0;
      }
    }
  }

  drawFlake({ x, y, radius, opacity }) {
    this.canvasContext.beginPath();
    this.canvasContext.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    this.canvasContext.arc(x, y, radius, 0, Math.PI * 2);
    this.canvasContext.fill();
  }

  drawFlakesOnCanvas() {
    this.clearCanvas();
    this.flakes.forEach((flake) => this.drawFlake(flake));
    this.updateFlakesPositions();
  }
}
