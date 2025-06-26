import clsx from "clsx";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const NoBorderButton = ({ children, className, link }) => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <a href={link}>
        <button
          className={clsx("", className)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <span className="flex text-amber-200 items-center gap-2 z-10">
            {children}
            <FaArrowRightLong
              className={clsx(
                "text-amber-200 transition-transform duration-300 ease-in-out",
                hover && "translate-x-1"
              )}
            />
          </span>
        </button>
      </a>
    </div>
  );
};

export default NoBorderButton;
