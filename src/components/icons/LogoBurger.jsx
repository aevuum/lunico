import clsx from "clsx";

const LogoBurger = (className) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="21"
        fill="none"
        className={clsx('', className)}
      >
        <path
          stroke="#E0BA5D"
          stroke-linecap="round"
          stroke-width="3"
          d="M24.5 10.654h-23M24.5 1.808H13.885M24.5 19.5H6.808"
        />
      </svg>
    </div>
  );
};

export default LogoBurger;
