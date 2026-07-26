import React from "react"
import NetworkItem from "./NetworkItem"
import {Spinner} from "@/components/ui/Spinner"
import {useTranslation} from "react-i18next"
import "@/i18n/i18next.ts"
import {LanguageSwitcher} from "@/components/ui/LanguageSwitcher"
import {Network} from "@/interfaces/networks.ts"
import {cn} from "@/lib/utils"

interface Props {
    loadingNetworks: boolean
    networks: Network[]
}

const NetworkList: React.FC<Props> = ({loadingNetworks, networks}) => {
    const {t} = useTranslation()

    const cities = [...new Set(networks.map((n) => n.location.city))]

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
            <div className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-orange-700 dark:from-amber-700 dark:via-amber-800 dark:to-orange-900">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
                <div className="container mx-auto px-4 py-12 md:py-20 relative">
                    <LanguageSwitcher />
                    <div className="mt-8 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                            Connected
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                            {t('home_title')}
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-amber-100/80 max-w-2xl mx-auto">
                            {t('home_subtitle')}
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-amber-50/90">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-white">{networks.length}</span>
                                <span className="text-sm">{t('networks_count')}</span>
                            </div>
                            <div className="h-6 w-px bg-amber-400/40" />
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-white">{cities.length}</span>
                                <span className="text-sm">{t('cities_count')}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-8 bg-gradient-to-t from-zinc-50 to-transparent dark:from-zinc-950" />
            </div>
            <div className="container mx-auto px-4 py-8 md:py-12">
                {loadingNetworks && <Spinner />}
                {!loadingNetworks && networks.length === 0 && (
                    <p className="text-center text-zinc-500 dark:text-zinc-400">{t('no_networks')}</p>
                )}
                {networks.length > 0 && (
                    <div className={cn(
                        "grid gap-4 md:gap-6",
                        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    )}>
                        {networks.map((network) => <NetworkItem key={network.id} network={network} />)}
                    </div>
                )}
            </div>
        </div>
    )
}

export default NetworkList
