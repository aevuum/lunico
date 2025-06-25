import clsx from "clsx";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const MainButton = ({ children, className }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className={clsx(
        "flex rounded-2xl bg-amber-300 border-amber-300 border-4",
        className
      )}
      onMouseEnter={setHover(true)}
      onMouseLeave={setHover(false)}
    >
      {children} <FaArrowRightLong className={setHover ? "ml-4" : "ml-2"} />
    </button>
  );
};

export default MainButton;
