import clsx from "clsx";

const SideButton = ({ children, className, link }) => {
  return (
    <a href={link}>
      <button
        className={clsx(
          "text-[#E4C166] px-8 py-2 transition-colors duration-300 ease-in-out border-1 bg-transparent border-[#E4C166] rounded-3xl hover:bg-amber-200 hover:text-black hover:border-amber-200",
          className
        )}
      >
        {children}
      </button>
    </a>
  );
};

export default SideButton;
