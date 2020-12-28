import { random } from "@/utils/numbers";

class Snowflake {
  constructor(x, y, radius, density, opacity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.density = density;
    this.opacity = opacity;
  }
}

const generateSnowflakes = (flakesCount, canvasWidth, canvasHeight) =>
  Array.from(
    { length: flakesCount },
    () =>
      new Snowflake(
        random(canvasWidth),
        random(canvasHeight),
        random(2, 7),
        random(2),
        random(0.5)
      )
  );

export class SnowfallCanvas {
  constructor(flakesCount, canvasContext) {
    this.canvasContext = canvasContext;
    this.flakes = generateSnowflakes(
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

  updateSnowflakesPositions() {
    const { clientHeight, clientWidth } = this.canvasContext.canvas;

    for (const flake of this.flakes) {
      flake.y += flake.density ** 2 + 1;
      flake.x += Math.tanh(flake.y / clientHeight - 0.5);

      if (flake.y > clientHeight) {
        flake.x = random(clientWidth);
        flake.y = 0;
      }
    }
  }

  drawSnowflake({ x, y, radius, opacity }) {
    this.canvasContext.beginPath();
    this.canvasContext.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    this.canvasContext.arc(x, y, radius, 0, Math.PI * 2);
    this.canvasContext.fill();
  }

  drawAllSnowflakes() {
    this.flakes.forEach((flake) => this.drawSnowflake(flake));
  }

  drawSnowfallFrame() {
    this.clearCanvas();
    this.drawAllSnowflakes();
    this.updateSnowflakesPositions();
  }
}
