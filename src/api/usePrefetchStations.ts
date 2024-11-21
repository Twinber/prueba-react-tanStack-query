import {fetchNetworkDataByNetworkId} from "@/api/actions.ts"
import {useQueryClient} from "@tanstack/react-query"

export const usePrefetchStations = (networkId: string) =>
{
    const queryClient = useQueryClient()

    return () => {
        queryClient.prefetchQuery({
            queryKey: ['stations', networkId],
            queryFn: () => fetchNetworkDataByNetworkId(networkId, ['id', 'stations', 'name']),
        });
    }
}