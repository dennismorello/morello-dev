import { useEffect, useRef } from "react";

import { useWindowSize } from "@/hooks/useWindowSize";
import { SnowCanvas } from "@/lib/snow";

const Snowflakes = ({ flakesCount = 128 }) => {
  const canvasRef = useRef();
  const snowflakesAnimationId = useRef();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;

      const canvasContext = canvasRef.current.getContext("2d");
      const snowCanvas = new SnowCanvas(flakesCount, canvasContext);

      const drawFlakesInAnimationFrame = () => {
        snowCanvas.drawFlakesOnCanvas();

        snowflakesAnimationId.current = requestAnimationFrame(
          drawFlakesInAnimationFrame
        );
      };

      snowflakesAnimationId.current = requestAnimationFrame(
        drawFlakesInAnimationFrame
      );
    }

    return () => {
      cancelAnimationFrame(snowflakesAnimationId.current);
    };
  }, [flakesCount]);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = windowSize.width;
      canvasRef.current.height = windowSize.height;
    }
  }, [windowSize.height, windowSize.width]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
      }}
    />
  );
};

export default Snowflakes;
