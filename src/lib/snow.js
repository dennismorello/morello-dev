import { random } from "./numbers";

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
  Array.from({ length: flakesCount }).map(() => {
    return new Flake(
      random(canvasWidth),
      random(canvasHeight),
      random(2, 7),
      random(2),
      random(0.5, 1)
    );
  });

export class SnowCanvas {
  constructor(flakesCount, canvasContext) {
    this.canvasContext = canvasContext;
    this.flakes = generateFlakes(
      flakesCount,
      canvasContext.canvas.clientWidth,
      canvasContext.canvas.clientHeight
    );
  }

  updateFlakesPositions() {
    for (const flake of this.flakes) {
      flake.y += Math.pow(flake.density, 2) + 1;

      if (flake.y > this.canvasContext.canvas.clientHeight) {
        flake.x = random(this.canvasContext.canvas.clientWidth);
        flake.y = 0;
      }
    }
  }

  drawFlakesOnCanvas() {
    this.canvasContext.clearRect(
      0,
      0,
      this.canvasContext.canvas.clientWidth,
      this.canvasContext.canvas.clientHeight
    );

    this.flakes.forEach(({ x, y, radius, opacity }) => {
      this.canvasContext.beginPath();
      this.canvasContext.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      this.canvasContext.arc(x, y, radius, 0, Math.PI * 2, true);
      this.canvasContext.fill();
    });

    this.updateFlakesPositions();
  }
}
