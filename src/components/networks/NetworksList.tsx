import React, {useMemo, useState} from "react"
import NetworkItem from "./NetworkItem"
import CountryFilter from "./CountryFilter"
import GridLayout from "@/components/layouts/GridLayout"
import {Spinner} from "@/components/ui/Spinner"
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
            <PageTitle title={`${t('home_title')} (${filteredNetworks.length})`}/>
            <div className="flex items-center justify-between">
                <CountryFilter networks={networks} onChange={setSelectedCountry}/>
                <LanguageSwitcher/>
            </div>
            {loadingNetworks && <Spinner/>}
            {filteredNetworks && (
                <GridLayout>
                    {filteredNetworks.map((network) => <NetworkItem key={network.id} network={network}/>)}
                </GridLayout>)}
        </ContainerLayout>
    )
}

export default NetworkList
  