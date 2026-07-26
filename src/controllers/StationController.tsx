import React from "react"
import {Route} from "@/routes/network/$networkId.lazy"
import {useStations} from "@/api/useStations.ts"
import StationList from "@/components/stations/StationList"
import {LoadingSpinner} from "@/components/ui/LoadingSpinner"

export const StationController: React.FC = () => {
    const {networkId} = Route.useParams()
    const {data: networkData, isLoading: loadingNetworkData} = useStations(networkId)
    return (
        <LoadingSpinner isLoading={loadingNetworkData}>
            <StationList networkData={networkData || null}/>
        </LoadingSpinner>
    )
}

