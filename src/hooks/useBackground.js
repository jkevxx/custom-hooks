import { useMemo } from "react";
import useMousePosition from "./useMousePosition";

const useBackground = () => {
  const position = useMousePosition();

  /**
   * if it was a hard process, we must useMemo
   */
  // const background = position.x < window.innerWidth / 2 ? "#ffaaff" : "#32abce";

  const background = useMemo(
    () => (position.x < window.innerWidth / 2 ? "#ffaaff" : "#32abce"),
    [position]
  );

  return { background, position };
};

export default useBackground;
