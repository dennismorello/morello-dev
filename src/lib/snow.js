class Flake {
  constructor(x, y, radius, density, opacity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.density = density;
    this.opacity = opacity;
  }
}

const moveFlakes = (flakes, canvasContext) => {
  for (const flake of flakes) {
    flake.y += Math.pow(flake.density, 2) + 1;

    if (
      flake.x > canvasContext.canvas.clientWidth ||
      flake.y > canvasContext.canvas.clientHeight
    ) {
      flake.x = Math.random() * canvasContext.canvas.clientWidth;
      flake.y = 0;
    }
  }
};

export const drawFlakes = (flakes, canvasContext) => {
  canvasContext.clearRect(
    0,
    0,
    canvasContext.canvas.clientWidth,
    canvasContext.canvas.clientHeight
  );

  flakes.forEach(({ x, y, radius, opacity }) => {
    canvasContext.beginPath();
    canvasContext.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    canvasContext.arc(x, y, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
  });

  moveFlakes(flakes, canvasContext);
};

export const generateFlakes = (count, canvasWidth, canvasHeight) =>
  Array.from({ length: count }).map(
    () =>
      new Flake(
        Math.random() * canvasWidth,
        Math.random() * canvasHeight,
        Math.random() * 5 + 2,
        Math.random() + 1,
        0.5 + Math.random() / 2
      )
  );
