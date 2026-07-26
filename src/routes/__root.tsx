import {createRootRoute, Outlet} from '@tanstack/react-router'
import Navbar from "@/components/layouts/Navbar"
// import {TanStackRouterDevtools} from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <Navbar/>
            <Outlet/>
            {/*<TanStackRouterDevtools/>*/}
        </>
    ),
})