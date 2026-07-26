import React from "react"
import {Network} from "@/interfaces/networks"
import {Link} from "@tanstack/react-router"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {useT} from "@/i18n/useT"
import {usePrefetchStations} from "@/api/usePrefetchStations.ts"
import {cn} from "@/lib/utils"

interface Props {
    network: Network
}

const NetworkItem: React.FC<Props> = ({network}) => {
    const {t} = useT()

    const prefetchData = usePrefetchStations(network.id)

    return (
        <Card
            className={cn(
                "group transition-all duration-300",
                "hover:shadow-lg hover:-translate-y-1",
                "border-zinc-200/80 dark:border-zinc-700/80"
            )}
        >
            <CardHeader>
                <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg font-bold text-zinc-800 dark:text-zinc-100">
                        {network.name}
                    </CardTitle>
                    {network.system && (
                        <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 shrink-0">
                            {network.system}
                        </span>
                    )}
                </div>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                    <span className="text-base">📍</span>
                    <span>{network.location.city}</span>
                </div>
                {network.company && network.company.length > 0 && (
                    <div className="flex items-center gap-2">
                        <span className="text-base">🏢</span>
                        <span className="truncate">{network.company.join(', ')}</span>
                    </div>
                )}
            </CardContent>
            <CardFooter>
                <Link
                    onMouseEnter={prefetchData}
                    to={`/network/${network.id}`}
                    className="w-full"
                >
                    <Button
                        variant="outline"
                        className={cn(
                            "w-full border-amber-300 text-amber-800",
                            "hover:bg-amber-50 hover:text-amber-900",
                            "dark:border-amber-700 dark:text-amber-300",
                            "dark:hover:bg-amber-950/50"
                        )}
                    >
                        {t('show')}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default NetworkItem
