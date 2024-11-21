import {useQuery} from "@tanstack/react-query"
import {fetchNetworksByCountry} from "@/api/actions.ts"

export const useNetworks = (country: string, filters: string[]) =>
    useQuery({
        queryKey: ['networks', country],
        queryFn: () => fetchNetworksByCountry(country, filters),
        enabled: !!country,
    })