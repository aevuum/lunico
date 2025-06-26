import clsx from "clsx";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const TransparentButton = ({ children, className, link }) => {
  const [hover, setHover] = useState(false);

  return (
    <a href={link}>
      <button
        className={clsx(
          "bg-transparent border-1 max-w-48 relative inline-flex px-8 py-4 text-sm font-medium rounded-full overflow-hidden transition-all duration-300 ease-in-out",
          className
        )}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span className="text-black flex items-center gap-2 z-10">
          {children}
          <FaArrowRightLong
            className={clsx(
              "transition-transform duration-300 ease-in-out",
              hover && "translate-x-1"
            )}
          />
        </span>
      </button>
    </a>
  );
};

export default TransparentButton;