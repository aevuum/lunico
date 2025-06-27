import { useState, useEffect } from "react";

const useResponsiveQuery = (width) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${width}px)`);

    const handleMediaChange = (event) => {
      setIsMatch(event.matches);
    };
    setIsMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [width]);

  return isMatch;
};

export default useResponsiveQuery;
