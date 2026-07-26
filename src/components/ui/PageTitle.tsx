import React from "react"

interface Props {
    title: string
}

export const PageTitle: React.FC<Props> = ({title}) => {
    return (
        <h1 className="text-center text-3xl text-amber-700 dark:text-amber-400">{title}</h1>
    )
}