import React from "react"
import {NetworkData, Station} from "@/interfaces/networkData"
import ContainerLayout from "@/components/layouts/ContainerLayout"
import {PageTitle} from "@/components/ui/PageTitle"
import NetworkDataItem from "@/components/stations/StationItem"
import GridLayout from "@/components/layouts/GridLayout"

interface Props {
    networkData: NetworkData | null
}
const StationList: React.FC<Props> = ({networkData}) => {
    return (
        <ContainerLayout>
            {networkData && <PageTitle title={`CityBike ${networkData?.name}`}/>}
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
  