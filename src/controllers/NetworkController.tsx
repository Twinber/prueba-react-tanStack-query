import React from "react"
import {useNetworks} from "@/api/useNetworks"
import {useT} from "@/i18n/useT"
import {usePageTitle} from "@/hooks/usePageTitle"
import NetworkList from "@/components/networks/NetworksList.tsx";

export const NetworkController: React.FC = () => {

    const {t} = useT()
    usePageTitle(t('home_title'))

    const {data: networks, isLoading: loadingNetworks,} = useNetworks('ES', ['id', 'name', 'location', 'company', 'system'])
    return (
        <NetworkList loadingNetworks={loadingNetworks} networks={networks || []}/>
    )
}

