import React from "react"
import {NetworkData, Station} from "@/interfaces/networkData"
import ContainerLayout from "@/components/layouts/ContainerLayout"
import {PageTitle} from "@/components/ui/PageTitle"
import {Spinner} from "@/components/ui/Spinner"
import NetworkDataItem from "@/components/stations/StationItem"
import GridLayout from "@/components/layouts/GridLayout"

interface Props {
    loadingNetworkData: boolean
    networkData: NetworkData | null
}
const StationList: React.FC<Props> = ({loadingNetworkData, networkData}) => {

    return (
        <ContainerLayout>
            {networkData && <PageTitle title={`CityBike ${networkData?.name}`}/>}
            {loadingNetworkData && <Spinner/>}
            {networkData && (
                <GridLayout>
                    {
                        networkData.stations.map((station: Station) =>
                            (<NetworkDataItem key={station.id} station={station}/>))
                    }
                </GridLayout>
            )}
        </ContainerLayout>
    )
}

export default StationList
  