import React, {ReactNode} from "react"

type Props = {
    children: ReactNode
}
const ContainerLayout: React.FC<Props> = ({children}) => {
    return (
        <div className='min-h-screen bg-[#020617] text-slate-100 selection:bg-cyan-500/30'>
            <header className="border-b border-cyan-500/10 bg-slate-950/50 backdrop-blur-md sticky top-0 z-40">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-sm border border-cyan-400 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                            <span className="text-cyan-400 font-mono font-bold text-xs">NV</span>
                        </div>
                        <h1 className="text-lg font-mono font-bold tracking-tighter uppercase glow-text">Nova Command</h1>
                    </div>
                    <div className="flex items-center gap-4 font-mono text-[10px] text-cyan-500/60 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                            System Live
                        </span>
                        <span className="hidden sm:block">Sector: 001-A</span>
                    </div>
                </div>
            </header>
            <main className='container mx-auto p-4 py-8'>
                {children}
            </main>
        </div>

    )
}
export default ContainerLayout
