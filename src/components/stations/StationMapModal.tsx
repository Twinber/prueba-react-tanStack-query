import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Station } from "@/interfaces/networkData"
import { useLeafletStyles } from "@/hooks/useLeafletStyles"
import { useT } from "@/i18n/useT"
import { Button } from "@/components/ui/button"


// Define neon marker colors based on availability
const getMarkerColor = (freeBikes: number) => {
    if (freeBikes > 5) return "#4ade80" // cyan-400 equivalent or neon green
    if (freeBikes > 0) return "#fbbf24" // amber-400
    return "#f87171" // red-400
}

// Create a custom SVG icon for Leaflet with glow
const createCustomIcon = (color: string) => {
    return new L.DivIcon({
        html: `
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 4px ${color}80);">
        <path d="M12 21C16.5 17.5 19 14.1667 19 10.5C19 6.63401 15.866 3.5 12 3.5C8.13401 3.5 5 6.63401 5 10.5C5 14.1667 7.5 17.5 12 21Z" fill="${color}" stroke="white" stroke-width="1"/>
        <circle cx="12" cy="10.5" r="2.5" fill="white"/>
      </svg>
    `,
        className: "custom-leaflet-icon",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    })
}

interface Props {
    station: Station
    isOpen: boolean
    onOpenChange: (open: boolean) => void
}

export const StationMapModal: React.FC<Props> = ({ station, isOpen, onOpenChange }) => {
    const { t } = useT()
    useLeafletStyles()

    const color = getMarkerColor(station.free_bikes)
    const icon = createCustomIcon(color)

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden border-cyan-500/30">
                <div className="flex flex-col h-full bg-slate-950/20 backdrop-blur-xl">
                    <DialogHeader className="p-4 border-b border-cyan-500/10 shrink-0">
                        <DialogTitle className="text-xl font-bold glow-text font-mono uppercase tracking-wider">{station.name}</DialogTitle>
                    </DialogHeader>

                    <div className="h-[400px] w-full relative">
                        {isOpen && (
                            <MapContainer
                                center={[station.latitude as number, station.longitude as number]}
                                zoom={16}
                                scrollWheelZoom={false}
                                className="h-full w-full invert-[0.9] hue-rotate-[180deg] contrast-[0.9] grayscale-[0.3]"
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker
                                    position={[station.latitude as number, station.longitude as number]}
                                    icon={icon}
                                >
                                    <Popup className="tech-popup">
                                        <div className="text-center font-mono">
                                            <p className="font-bold text-cyan-400">{station.name}</p>
                                            <p className="text-sm text-slate-100">{t('bikes_available')}: {station.free_bikes}</p>
                                        </div>
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        )}

                        <div className="absolute top-2 right-2 z-[400] bg-slate-950/80 px-2 py-1 border border-cyan-500/20 text-[10px] font-mono text-cyan-400 uppercase tracking-widest pointer-events-none">
                            Tactical View
                        </div>
                    </div>

                    <div className="p-4 border-t border-cyan-500/10 flex justify-between items-center text-sm shrink-0 font-mono">
                        <div className="flex items-center gap-2">
                            <span className="text-slate-400 uppercase text-[10px] tracking-widest">{t('bikes_available')}:</span>
                            <span className="text-lg font-bold" style={{ color }}>{station.free_bikes}</span>
                        </div>
                        <Button 
                            variant="hud"
                            size="sm"
                            onClick={() => onOpenChange(false)}
                            className="px-6"
                        >
                            {t('close')}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

