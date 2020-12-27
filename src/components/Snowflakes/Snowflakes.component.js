import { useEffect, useRef } from "react";

// Libs
import { SnowCanvas } from "@/lib/snow";

const Snowflakes = ({ flakesCount = 128 }) => {
  const canvasRef = useRef();
  const snowflakesAnimationId = useRef();

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = document.body.clientWidth;
      canvasRef.current.height = document.body.clientHeight;

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
  }, [canvasRef.current]);

  useEffect(() => {
    const updateCanvasSize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = document.body.clientWidth;
        canvasRef.current.height = document.body.clientHeight;
      }
    };

    window.addEventListener("resize", updateCanvasSize);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [canvasRef.current]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
      }}
    />
  );
};

export default Snowflakes;
