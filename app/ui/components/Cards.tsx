function Cards({ type }: { type: "blue" | "orange" }) {
    return (
        <div className={`w-full rounded-lg bg-linear-to-bl p-4 to-60% border ${type=== "blue"? "from-blue border-blue" : "from-orange border-orange"} to-transparent`}>
            fd
        </div>
    )
}

export default Cards