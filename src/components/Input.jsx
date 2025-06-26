import clsx from "clsx";


const Input = ({className, placeholder}) => {
  return (
    <div>
      <input placeholder={placeholder} className={clsx('bg-transparent p-4 text-[#B69A52] border-[#B69A52] border-1 rounded-full w-96', className)}/>
    </div>
  )
}

export default Input;