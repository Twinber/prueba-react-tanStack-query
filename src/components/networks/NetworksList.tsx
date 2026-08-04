import React, {useMemo, useState} from "react"
import NetworkItem from "./NetworkItem"
import CountryFilter from "./CountryFilter"
import GridLayout from "@/components/layouts/GridLayout"
import {Skeleton} from "@/components/ui/Skeleton"
import ContainerLayout from "@/components/layouts/ContainerLayout"
import {PageTitle} from "@/components/ui/PageTitle"
import {useTranslation} from "react-i18next"
import "@/i18n/i18next.ts"
import {LanguageSwitcher} from "@/components/ui/LanguageSwitcher"
import {Network} from "@/interfaces/networks.ts";

interface Props {
    loadingNetworks: boolean
    networks: Network[]
}
const NetworkList: React.FC<Props> = ({loadingNetworks, networks}) => {
    const {t} = useTranslation()
    const [selectedCountry, setSelectedCountry] = useState('')

    const filteredNetworks = useMemo(
        () => (selectedCountry
            ? networks.filter((network) => network.location.country === selectedCountry)
            : networks)
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name, undefined, {sensitivity: 'base'})),
        [networks, selectedCountry],
    )

    return (
        <ContainerLayout>
            <PageTitle title={`${t('home_title')} (${networks.length})`}/>
            <div className="flex items-center justify-between">
                <CountryFilter networks={networks} onChange={setSelectedCountry}/>
                <LanguageSwitcher/>
            </div>
            {loadingNetworks && (
                <GridLayout>
                    {Array.from({length: 8}).map((_, index) => (
                        <div key={index}
                             className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow dark:border-zinc-800 dark:bg-zinc-950">
                            <div className="mb-4">
                                <Skeleton className="h-5 w-2/3"/>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Skeleton className="h-4 w-full"/>
                                <Skeleton className="h-4 w-5/6"/>
                                <Skeleton className="h-4 w-3/4"/>
                            </div>
                            <div className="mt-4">
                                <Skeleton className="h-9 w-24"/>
                            </div>
                        </div>
                    ))}
                </GridLayout>
            )}
            {filteredNetworks && (
                <GridLayout>
                    {filteredNetworks.map((network) => <NetworkItem key={network.id} network={network}/>)}
                </GridLayout>)}
        </ContainerLayout>
    )
}

export default NetworkList
  