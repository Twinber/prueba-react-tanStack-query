import React from "react"
import {useNetworks} from "@/api/useNetworks"
import NetworkList from "@/components/networks/NetworksList.tsx";

export const NetworkController: React.FC = () => {

    const {data: networks, isLoading: loadingNetworks,} = useNetworks('ES', ['id', 'name', 'location', 'company', 'system'])
    return (
        <NetworkList loadingNetworks={loadingNetworks} networks={networks || []}/>
    )
}

