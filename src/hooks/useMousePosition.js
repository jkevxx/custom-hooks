import { useState, useEffect } from "react";

const initialPosition = { x: null, y: null };

const useMousePosition = () => {
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    /**
     * we add handleMouseMove inside of useEffect to avoid useCallback,
     * otherwise it'd become a dependency
     */
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      // console.log(clientX, clientY);
      setPosition({
        x: clientX,
        y: clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

export default useMousePosition;
