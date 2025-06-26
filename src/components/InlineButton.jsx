import clsx from "clsx";

const InlineButton = ({ children, className, link }) => {
  return (
    <div className="group relative inline-block">
      <a href={link} className="inline-block">
        <button
          className={clsx(
            "text-[#988144] relative z-10 transition-colors duration-300 ease-in-out group-hover:text-amber-300",
            className
          )}
        >
          {children}
        </button>
        <span className="absolute max-w-30 left-0 bottom-0 w-full h-[2px] bg-amber-300 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
      </a>
    </div>
  );
};

export default InlineButton;
