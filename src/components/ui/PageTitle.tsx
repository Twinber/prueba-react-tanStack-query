import React from "react"

interface Props {
    title: string
}

export const PageTitle: React.FC<Props> = ({title}) => {
    return (
        <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-cyan-500/50"></div>
            <h2 className="text-2xl font-mono font-bold uppercase tracking-[0.2em] text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                {title}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-cyan-500/30 to-cyan-500/50"></div>
        </div>
    )
}