import React from "react"
import {useNetworks} from "@/api/useNetworks"
import NetworkList from "@/components/networks/NetworksList.tsx"
import {LoadingSpinner} from "@/components/ui/LoadingSpinner"

export const NetworkController: React.FC = () => {
    const {data: networks, isLoading: loadingNetworks} = useNetworks('ES', ['id', 'name', 'location', 'company', 'system'])
    return (
        <LoadingSpinner isLoading={loadingNetworks}>
            <NetworkList networks={networks || []}/>
        </LoadingSpinner>
    )
}

