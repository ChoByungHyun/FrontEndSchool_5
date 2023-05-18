import { useState } from "react";
import { useEffect } from "react";

export default function useScrollBottom() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsBottom(
        document.documentElement.scrollTop + window.innerHeight + 30 >=
          document.documentElement.offsetHeight
      );
    });
  }, []);
  return isBottom;
}
