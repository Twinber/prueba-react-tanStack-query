import React from "react"
import NetworkItem from "./NetworkItem"
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

    return (
        <ContainerLayout>
            <PageTitle title={t('home_title')}/>
            <LanguageSwitcher/>
            {loadingNetworks && <Spinner/>}
            {networks && (
                <GridLayout>
                    {networks.map((network) => <NetworkItem key={network.id} network={network}/>)}
                </GridLayout>)}
        </ContainerLayout>
    )
}

export default NetworkList
  