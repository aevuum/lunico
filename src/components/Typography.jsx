import clsx from "clsx"


const Typography = ({ children, className }) => {
  return (
    <h1 className={clsx('font-[Against] text-5xl', className)}>
      {children}
    </h1>
  );
};

export default Typography;


// TODO: Добавь смену размера в компонент
