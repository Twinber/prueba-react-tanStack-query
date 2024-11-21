import React from "react"
import {Network} from "@/interfaces/networks"
import {Link} from "@tanstack/react-router"
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {useT} from "@/i18n/useT"
import {usePrefetchStations} from "@/api/usePrefetchStations.ts";

interface Props {
    network: Network
}

const NetworkItem: React.FC<Props> = ({network}) => {
    const {t} = useT()

    const prefetchData = usePrefetchStations(network.id)

    return (
        <Card>
            <CardHeader>
                <h2>{network.name}</h2>
            </CardHeader>
            <CardContent>
                <p>{t('company')}: {network.company}</p>
                <p>{t('system')}: {network.system}</p>
                <p>{t('city')}: {network.location.city}</p>
            </CardContent>
            <CardFooter>
                <Link onMouseEnter={prefetchData} to={`/network/${network.id}`}>
                    <Button>{t('show')}</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default NetworkItem
