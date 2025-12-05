function Cards({ type , className ,  children }: { type: "blue" | "orange" , className?:string, children?: React.ReactNode  }) {
    return (
        <div className={`w-full rounded-lg bg-linear-to-bl p-4 to-50% border ${type=== "blue"? "from-blue border-blue" : "from-orange border-orange"} to-transparent ${className ? className : ""}`}>
            {children}
        </div>
    )
}

export default Cards