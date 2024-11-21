import {citybikApi} from "@/api/citybike.api.ts"
import {NetworkData} from "@/interfaces/networkData.ts"
import {Network} from "@/interfaces/networks.ts"

export const fetchNetworkDataByNetworkId = async (networkId: string, filter: string[]) => {
    const {data} = await citybikApi.get<{ network: NetworkData }>(`/networks/${networkId}?fields=${filter.join(',')}`)
    return data.network
}

export const fetchNetworksByCountry = async (country: string, filter: string[]) => {
    const {data} = await citybikApi.get<{ networks: Network[] }>(`/networks?fields=${filter.join(',')}`)
    return data.networks.filter((network: Network) => network.location.country === country)

};