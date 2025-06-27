import clsx from "clsx"
import '../main.css'




const Typography = ({ children, className }) => {
  return (
    <div>
      <h1 className={clsx('typography text-5xl', className)}>
        {children}
      </h1>
    </div>
  );
};

export default Typography;
