import React from "react"

export const Spinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center p-12 gap-4">
        <div
            className="inline-block h-10 w-10 animate-spin rounded-full border-2 border-solid border-cyan-400 border-e-transparent align-[-0.125em] shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <span className="font-mono text-[10px] text-cyan-500/60 uppercase tracking-[0.3em] animate-pulse">Initializing Data Stream</span>
    </div>

)