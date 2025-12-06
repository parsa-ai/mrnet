import { ReactNode } from "react"

function ButtonGr({ children, type, className, ...arg }: { children?: ReactNode, type?: "blue" | "orange", className?: string }) {
    return (
        <div className="flex w-full justify-center items-center group">
            <button className={`bg-linear-to-tr to-orange to-80%  via-40% from-20% via-pink from-blue  text-black font-medium transition uppercase text-sm tracking-[2px]   w-full lg:w-[335px] rounded-full h-13 ${className ? className : ""}`} {...arg}>{children}</button>
            <div className="opacity-0 transition group-hover:opacity-100  absolute -z-10 bg-linear-to-tr to-orange to-80%  via-40% from-20% via-pink from-blue w-full lg:w-[335px] rounded-full h-13 blur-xl" />
        </div>
    )
}


export default ButtonGr