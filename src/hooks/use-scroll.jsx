import { useState, useEffect } from "react";

const useScroll = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return isScrollDown;
};

export default useScroll;
