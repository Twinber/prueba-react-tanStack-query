import { useQueries } from "@tanstack/react-query"
import { fetchNetworkDataByNetworkId } from "@/api/actions"
import type { Station } from "@/interfaces/networkData"
import type { FavoriteStation } from "@/hooks/useFavorites"

export interface FavoriteStationData extends Station {
  networkId: string
  networkName: string
}

export const useFavoriteStations = (favorites: FavoriteStation[]) => {
  const networkIds = [...new Set(favorites.map((f) => f.networkId))]

  const queries = useQueries({
    queries: networkIds.map((networkId) => ({
      queryKey: ["stations", networkId],
      queryFn: () =>
        fetchNetworkDataByNetworkId(networkId, ["id", "stations", "name"]),
      enabled: !!networkId && networkIds.length > 0,
    })),
  })

  const stations: FavoriteStationData[] = queries.flatMap((query, index) => {
    if (!query.data) return []
    const networkId = networkIds[index]
    return query.data.stations
      .filter((station: Station) =>
        favorites.some(
          (f) => f.networkId === networkId && f.stationId === station.id,
        ),
      )
      .map((station: Station) => ({
        ...station,
        networkId,
        networkName: query.data.name,
      }))
  })

  return {
    stations,
    isLoading: queries.some((q) => q.isLoading),
    isError: queries.some((q) => q.isError),
  }
}
