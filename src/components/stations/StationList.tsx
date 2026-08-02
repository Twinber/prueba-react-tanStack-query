import React, {useMemo, useState} from "react"
import {NetworkData, Station} from "@/interfaces/networkData"
import ContainerLayout from "@/components/layouts/ContainerLayout"
import {PageTitle} from "@/components/ui/PageTitle"
import {Spinner} from "@/components/ui/Spinner"
import NetworkDataItem from "@/components/stations/StationItem"
import GridLayout from "@/components/layouts/GridLayout"
import StationSearch from "@/components/stations/StationSearch"

interface Props {
    loadingNetworkData: boolean
    networkData: NetworkData | null
}
const StationList: React.FC<Props> = ({loadingNetworkData, networkData}) => {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredStations = useMemo(() => {
        if (!networkData) return []
        const normalized = searchTerm.trim().toLowerCase()
        if (!normalized) return networkData.stations
        return networkData.stations.filter((station: Station) =>
            station.name.toLowerCase().includes(normalized))
    }, [networkData, searchTerm])

    return (
        <ContainerLayout>
            {networkData && <PageTitle title={`CityBike ${networkData?.name}`}/>}
            {loadingNetworkData && <Spinner/>}
            {networkData && (
                <>
                    <StationSearch onSearch={setSearchTerm}/>
                    <GridLayout>
                        {
                            filteredStations.map((station: Station) =>
                                (<NetworkDataItem key={station.id} station={station}/>))
                        }
                    </GridLayout>
                </>
            )}
        </ContainerLayout>
    )
}

export default StationList
  