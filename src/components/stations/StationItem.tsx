import React from "react"
import {Station} from "@/interfaces/networkData"
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {StationAvailability} from "@/components/stations/StationAvailability"
import {TimeAgo} from "@/components/ui/TimeAgo"
import {StationMapButton} from "@/components/ui/StationMapButton"

interface Props {
    station: Station
}

const StationItem: React.FC<Props> = ({station}) => {
    return (
        <Card className="hud-border overflow-hidden">
            <CardHeader className="pb-2">
                <h2 className="text-xl font-bold glow-text tracking-tight">{station.name}</h2>
            </CardHeader>
            <CardContent className="space-y-4">
                <StationAvailability station={station}/>
                <div className="text-xs font-mono text-cyan-500/60 uppercase tracking-widest">
                    <TimeAgo timestamp={station.timestamp}/>
                </div>
            </CardContent>
            <CardFooter className="pt-2">
                <StationMapButton station={station} className="w-full" />
            </CardFooter>
        </Card>

    )
}

export default StationItem
