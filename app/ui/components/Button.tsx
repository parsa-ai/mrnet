import { ReactNode } from "react"

function Button({children , type , className ,  ...arg}: {children?: ReactNode , type?: "blue" | "orange"  , className?: string}) {
  return (
    <button className={`bg-blue text-black font-medium transition uppercase text-sm tracking-[2px] hover:shadow-[0px_0px_16px_3px_#00E4F0CC] w-full lg:w-[334px] rounded-full h-9 ${className ? className : ""}`} {...arg}>{children}</button>
  )
}


export default Button