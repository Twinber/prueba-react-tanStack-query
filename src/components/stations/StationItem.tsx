import React from "react"
import {Station} from "@/interfaces/networkData"
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {StationAvailability} from "@/components/stations/StationAvailability"
import {TimeAgo} from "@/components/ui/TimeAgo"
import {GmapsButton} from "@/components/ui/GmapsButton"

interface Props {
    station: Station
}

const StationItem: React.FC<Props> = ({station}) => {
    return (
        <Card>
            <CardHeader>
                <h2>{station.name}</h2>
            </CardHeader>
            <CardContent>
                <StationAvailability station={station}/>
                <TimeAgo timestamp={station.timestamp}/>
            </CardContent>
            <CardFooter>
                <GmapsButton latitude={station.latitude} longitude={station.longitude}/>
            </CardFooter>
        </Card>
    )
}

export default StationItem
