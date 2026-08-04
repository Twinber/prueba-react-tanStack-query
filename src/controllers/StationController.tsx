import React from "react"
import {Route} from "@/routes/network/$networkId.lazy";
import {useStations} from "@/api/useStations.ts";
import {usePageTitle} from "@/hooks/usePageTitle";
import StationList from "@/components/stations/StationList";

export const StationController: React.FC = () => {

    const {networkId} = Route.useParams()
    const {
        data: networkData,
        isLoading: loadingNetworkData,
        isError,
        error,
        isFetching,
        refetch,
    } = useStations(networkId);
    usePageTitle(networkData?.name ? `CityBike ${networkData.name}` : 'CityBike');
    return (
        <StationList
            loadingNetworkData={loadingNetworkData}
            networkData={networkData || null}
            isError={isError}
            error={error}
            isFetching={isFetching}
            refetch={refetch}
        />
    )
}

