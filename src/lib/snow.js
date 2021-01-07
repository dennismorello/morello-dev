import { random } from "@/utils/numbers";

class Snowflake {
  constructor(x, y, radius, density, opacity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.density = density;
    this.opacity = opacity;
  }

  static random(maximumAbscissa, maximumOrdinate) {
    return new this(
      random(maximumAbscissa),
      random(maximumOrdinate),
      random(2, 7),
      random(2),
      random(0.5)
    );
  }
}

const generateRandomSnowflakes = (
  flakesCount,
  maximumAbscissa,
  maximumOrdinate
) =>
  Array.from({ length: flakesCount }, () =>
    Snowflake.random(maximumAbscissa, maximumOrdinate)
  );

class SnowfallCanvas {
  constructor(flakesCount, canvasContext) {
    this.canvasContext = canvasContext;
    this.snowflakes = generateRandomSnowflakes(
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

    for (const snowflake of this.snowflakes) {
      snowflake.y += snowflake.density ** 2 + 1;
      snowflake.x += Math.tanh(snowflake.y / clientHeight - 0.5);

      if (snowflake.y > clientHeight) {
        snowflake.x = random(clientWidth);
        snowflake.y = 0;
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
    this.snowflakes.forEach((snowflake) => this.drawSnowflake(snowflake));
  }

  drawSnowfallFrame() {
    this.clearCanvas();
    this.drawAllSnowflakes();
    this.updateSnowflakesPositions();
  }
}

export default SnowfallCanvas;
