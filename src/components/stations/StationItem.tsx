import React from "react"
import {Station} from "@/interfaces/networkData"
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {StationAvailability} from "@/components/stations/StationAvailability"
import {TimeAgo} from "@/components/ui/TimeAgo"
import {GmapsButton} from "@/components/ui/GmapsButton"
import {Button} from "@/components/ui/button"
import {Star} from "lucide-react"
import {useFavorites} from "@/hooks/useFavorites"

interface Props {
    station: Station
    networkId: string
}

const StationItem: React.FC<Props> = ({station, networkId}) => {
    const {isFavorite, toggleFavorite} = useFavorites()
    const favorite = isFavorite(networkId, station.id)

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <h2>{station.name}</h2>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleFavorite({networkId, stationId: station.id})}
                        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        <Star className={favorite ? "fill-amber-400 text-amber-400" : ""}/>
                    </Button>
                </div>
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
