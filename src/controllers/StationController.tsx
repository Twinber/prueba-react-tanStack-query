import React from "react"
import {Route} from "@/routes/network/$networkId.lazy";
import {useStations} from "@/api/useStations.ts";
import StationList from "@/components/stations/StationList";

export const StationController: React.FC = () => {

    const {networkId} = Route.useParams()
    const {data: networkData, isLoading: loadingNetworkData,} = useStations(networkId);
    return (
        <StationList loadingNetworkData={loadingNetworkData} networkData={networkData || null}/>
    )
}

