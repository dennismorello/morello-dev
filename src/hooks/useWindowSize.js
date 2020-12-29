import debounce from "lodash/debounce";
import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleWindowResize = debounce(
      () =>
        setWindowSize({ width: window.innerWidth, height: window.innerHeight }),
      150
    );

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return windowSize;
};
