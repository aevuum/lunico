import clsx from "clsx";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const MainButton = ({ children, className }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className={clsx(
        "max-w-42 relative inline-flex px-8 py-4 text-sm font-medium rounded-full overflow-hidden transition-all duration-300 ease-in-out bg-gradient-to-r from-[#B0854B] via-[#EADDA7] to-[#B0854B]",
        className
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="text-black flex gap-2 z-10">
        {children}
        <FaArrowRightLong
          className={clsx(
            "transition-transform duration-300 ease-in-out",
            hover && "translate-x-4"
          )}
        />
      </span>
    </button>
  );
};

export default MainButton;
