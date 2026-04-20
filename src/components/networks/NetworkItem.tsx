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
        <Card className="hud-border group hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-500">
            <CardHeader className="pb-2">
                <h2 className="text-xl font-bold glow-text tracking-tight group-hover:scale-[1.02] transition-transform">{network.name}</h2>
            </CardHeader>
            <CardContent className="space-y-1 font-mono text-xs">
                <p className="flex justify-between">
                    <span className="text-slate-500 uppercase">{t('city')}:</span>
                    <span className="text-cyan-300">{network.location.city}</span>
                </p>
                <div className="h-px bg-cyan-500/10 my-2"></div>
                <p className="text-[10px] text-slate-400 line-clamp-1">
                    <span className="text-slate-600 mr-2">SYS//</span>{network.system || "GENERIC_CORE"}
                </p>
            </CardContent>
            <CardFooter className="pt-2">
                <Link onMouseEnter={prefetchData} to={`/network/${network.id}`} className="w-full">
                    <Button variant="hud" className="w-full group-hover:bg-cyan-500/20">
                        {t('show')}
                    </Button>
                </Link>
            </CardFooter>
        </Card>

    )
}

export default NetworkItem
