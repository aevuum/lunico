import clsx from "clsx";
import { FaArrowRightLong } from "react-icons/fa6";

const MainButton = ({children, className}) => {
  return (
    <>
    <button className={clsx('', className)}>{children} <FaArrowRightLong /></button>
    </>
  )
}

export default MainButton;