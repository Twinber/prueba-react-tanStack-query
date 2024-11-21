import {StrictMode} from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import {createRouter, RouterProvider} from '@tanstack/react-router'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {routeTree} from './routeTree.gen'

const router = createRouter({routeTree})

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60,
            gcTime: 1000 * 60 * 5,
        },
    },
    }
)

const rootElement = document.getElementById('root')!

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}/>
                <ReactQueryDevtools initialIsOpen={true}/>
            </QueryClientProvider>
        </StrictMode>,
    )

}
