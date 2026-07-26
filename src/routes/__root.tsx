import {createRootRoute, Outlet, Link} from '@tanstack/react-router'
import {useTranslation} from "react-i18next"
import "@/i18n/i18next.ts"
import {useFavorites} from "@/hooks/useFavorites"
import {Star} from "lucide-react"
// import {TanStackRouterDevtools} from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => {
        const {t} = useTranslation()
        const {favorites} = useFavorites()
        return (
            <>
                <header className="border-b border-zinc-200 bg-white">
                    <div className="container mx-auto flex items-center justify-between px-4 py-3">
                        <Link to="/" className="text-lg font-semibold text-zinc-900 hover:text-amber-700">
                            CityBike
                        </Link>
                        <Link to="/favorites" className="relative flex items-center gap-1 text-sm text-zinc-600 hover:text-amber-700">
                            <Star className="h-5 w-5"/>
                            <span>{t("favorites")}</span>
                            {favorites.length > 0 && (
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-white">
                                    {favorites.length}
                                </span>
                            )}
                        </Link>
                    </div>
                </header>
                <Outlet/>
                {/*<TanStackRouterDevtools/>*/}
            </>
        )
    },
})