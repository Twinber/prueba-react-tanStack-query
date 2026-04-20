import React from "react"
import {Station} from "@/interfaces/networkData"
import {cn} from "@/lib/utils"


interface Props {
    station: Station
}

export const StationAvailability: React.FC<Props> = ({station}) => {
    const total = station.free_bikes + station.empty_slots;

    const percentage = total > 0 ? (station.free_bikes / total) * 100 : 0;
    
    // Choose neon color based on availability
    const barColor = percentage > 60 ? "bg-green-400" : percentage > 20 ? "bg-yellow-400" : "bg-red-500";
    const shadowColor = percentage > 60 ? "shadow-[0_0_10px_rgba(74,222,128,0.5)]" : percentage > 20 ? "shadow-[0_0_10px_rgba(250,204,21,0.5)]" : "shadow-[0_0_10px_rgba(239,68,68,0.5)]";

    return (
        <div className="space-y-2">
            <div className="flex justify-between items-end">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-tighter">Bikes Available</span>
                <span className="text-lg font-mono font-bold text-white leading-none">
                    {station.free_bikes} <span className="text-[10px] text-slate-500">/ {total}</span>
                </span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
                <div 
                    className={cn("h-full transition-all duration-1000 ease-out", barColor, shadowColor)}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    )
}