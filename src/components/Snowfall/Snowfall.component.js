import { chakra } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

import { useWindowSize } from "@/hooks/useWindowSize";
import { SnowfallCanvas } from "@/lib/snow";

const ChakraCanvas = chakra("canvas");

const Snowfall = ({ flakesCount = 128 }) => {
  const canvasRef = useRef();
  const snowfallAnimationFrame = useRef();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;

      const canvasContext = canvasRef.current.getContext("2d");
      const snowfallCanvas = new SnowfallCanvas(flakesCount, canvasContext);

      const drawFlakesInAnimationFrame = () => {
        snowfallCanvas.drawSnowfallFrame();

        snowfallAnimationFrame.current = requestAnimationFrame(
          drawFlakesInAnimationFrame
        );
      };

      snowfallAnimationFrame.current = requestAnimationFrame(
        drawFlakesInAnimationFrame
      );
    }

    return () => {
      cancelAnimationFrame(snowfallAnimationFrame.current);
    };
  }, [flakesCount]);

  useEffect(() => {
    const { height, width } = windowSize;

    if (height && width && canvasRef.current) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    }
  }, [windowSize]);

  return <ChakraCanvas ref={canvasRef} pos="fixed" top={0} left={0} />;
};

export default Snowfall;
