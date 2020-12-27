import { useEffect, useRef } from "react";

// Libs
import { drawFlakes, generateFlakes } from "@/lib/snow";

const Snowflakes = ({ flakesCount = 128 }) => {
  const canvasRef = useRef();
  const snowflakesAnimationId = useRef();

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = document.body.clientWidth;
      canvasRef.current.height = document.body.clientHeight;

      const context = canvasRef.current.getContext("2d");
      const flakes = generateFlakes(
        flakesCount,
        canvasRef.current.width,
        canvasRef.current.height
      );

      const drawFlakesInAnimationFrame = () => {
        drawFlakes(flakes, context);

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
