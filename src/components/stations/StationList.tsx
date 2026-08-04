import React, {useMemo, useState} from "react"
import {NetworkData, Station} from "@/interfaces/networkData"
import ContainerLayout from "@/components/layouts/ContainerLayout"
import {PageTitle} from "@/components/ui/PageTitle"
import {Spinner} from "@/components/ui/Spinner"
import NetworkDataItem from "@/components/stations/StationItem"
import GridLayout from "@/components/layouts/GridLayout"
import StationSearch from "@/components/stations/StationSearch"
import {useT} from "@/i18n/useT"

interface Props {
    loadingNetworkData: boolean
    networkData: NetworkData | null
}
const StationList: React.FC<Props> = ({loadingNetworkData, networkData}) => {
    const {t} = useT()
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
            {networkData && (
                <div className="mb-4 flex items-center justify-between">
                    <PageTitle title={`CityBike ${networkData?.name}`}/>
                    <span className="rounded-full border border-amber-700 bg-amber-700/10 px-3 py-1 text-sm font-medium text-amber-700">
                        {t('station_count', {count: networkData.stations.length})}
                    </span>
                </div>
            )}
            {loadingNetworkData && <Spinner/>}
            {networkData && (
                <>
                    <StationSearch onSearch={setSearchTerm}/>
                    {filteredStations.length === 0 && searchTerm.trim() ? (
                        <p className="py-8 text-center text-sm text-zinc-500">
                            {t('no_stations_found')}
                        </p>
                    ) : (
                        <GridLayout>
                            {
                                filteredStations.map((station: Station) =>
                                    (<NetworkDataItem key={station.id} station={station}/>))
                            }
                        </GridLayout>
                    )}
                </>
            )}
        </ContainerLayout>
    )
}

export default StationList
  