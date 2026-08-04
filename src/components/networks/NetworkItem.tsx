import React from "react"
import {Network} from "@/interfaces/networks"
import {Link} from "@tanstack/react-router"
import {CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {buttonVariants} from "@/components/ui/button"
import {cn} from "@/lib/utils"
import {useT} from "@/i18n/useT"
import {usePrefetchStations} from "@/api/usePrefetchStations.ts"

interface Props {
    network: Network
}

const NetworkItem: React.FC<Props> = ({network}) => {
    const {t} = useT()

    const prefetchData = usePrefetchStations(network.id)

    return (
        <Link
            to={`/network/${network.id}`}
            onMouseEnter={prefetchData}
            className={cn(
                "block rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow transition-colors hover:border-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:border-zinc-700 dark:focus-visible:ring-zinc-300"
            )}
        >
            <CardHeader>
                <h2>{network.name}</h2>
            </CardHeader>
            <CardContent>
                <p>{t('company')}: {network.company}</p>
                <p>{t('system')}: {network.system}</p>
                <p>{t('city')}: {network.location.city}</p>
            </CardContent>
            <CardFooter>
                <span className={buttonVariants()}>{t('show')}</span>
            </CardFooter>
        </Link>
    )
}

export default NetworkItem
