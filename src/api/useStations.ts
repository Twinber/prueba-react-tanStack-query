import {useQuery} from "@tanstack/react-query"
import {fetchNetworkDataByNetworkId} from "@/api/actions.ts"

export const useStations = (networkId: string) =>
    useQuery({
        queryKey: ['stations', networkId],
        queryFn: () => fetchNetworkDataByNetworkId(networkId, ['id', 'stations', 'name']),
        enabled: !!networkId,
    })