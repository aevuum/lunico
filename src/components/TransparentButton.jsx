import clsx from "clsx";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const TransparentButton = ({ children, className }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className={clsx(
        "relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-full overflow-hidden transition-all duration-300 ease-in-out",
        "before:absolute before:right-0 before:top-0 before:w-1/2 before:h-full",
        "",
        "before:transition-transform before:duration-300 before:ease-in-out",
        "before:origin-right hover:before:w-full hover:before:origin-right",
        "bg-transparent border-black border-1 text-white hover:bg-amber-200",
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
  );
};

export default TransparentButton;