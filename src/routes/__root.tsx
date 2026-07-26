import {createRootRoute, Outlet} from '@tanstack/react-router'
// import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import {ThemeSwitcher} from "@/components/ui/ThemeSwitcher"

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="fixed top-4 right-4 z-50">
                <ThemeSwitcher/>
            </div>
            <Outlet/>
            {/*<TanStackRouterDevtools/>*/}
        </>
    ),
})