import React, {useMemo, useState} from "react"
import {NetworkData, Station} from "@/interfaces/networkData"
import ContainerLayout from "@/components/layouts/ContainerLayout"
import {PageTitle} from "@/components/ui/PageTitle"
import {Spinner} from "@/components/ui/Spinner"
import NetworkDataItem from "@/components/stations/StationItem"
import GridLayout from "@/components/layouts/GridLayout"
import StationSearch from "@/components/stations/StationSearch"
import {useT} from "@/i18n/useT"
import {Button} from "@/components/ui/button"

interface Props {
    loadingNetworkData: boolean
    networkData: NetworkData | null
    isError: boolean
    error: Error | null
    isFetching: boolean
    refetch: () => void
}
const StationList: React.FC<Props> = ({
                                          loadingNetworkData,
                                          networkData,
                                          isError,
                                          error,
                                          isFetching,
                                          refetch,
                                      }) => {
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
            {isError ? (
                <div className="flex flex-col items-center py-12 text-center">
                    <p className="text-sm text-red-600">
                        {error?.message || t('error_loading_stations')}
                    </p>
                    <Button variant="outline" onClick={refetch} className="mt-4">
                        {t('retry')}
                    </Button>
                </div>
            ) : (
                <>
                    {networkData && (
                        <div className="mb-4 flex items-center justify-between">
                            <PageTitle title={`CityBike ${networkData?.name}`}/>
                            <div className="flex items-center gap-3">
                                <span className="rounded-full border border-amber-700 bg-amber-700/10 px-3 py-1 text-sm font-medium text-amber-700">
                                    {t('station_count', {count: networkData.stations.length})}
                                </span>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={refetch}
                                    disabled={isFetching}
                                >
                                    {t('refresh')}
                                </Button>
                            </div>
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
                </>
            )}
        </ContainerLayout>
    )
}

export default StationList
  