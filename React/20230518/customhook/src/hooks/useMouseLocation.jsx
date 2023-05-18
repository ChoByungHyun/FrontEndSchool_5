import { useState, useEffect } from "react";

function useMouseLocation(iniVal) {
  const [mouseLocation, setmouseLocation] = useState(iniVal || { x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setmouseLocation({ x: e.clientX, y: e.clientY });
    });
  }, []);

  return mouseLocation;
}
export default useMouseLocation;
