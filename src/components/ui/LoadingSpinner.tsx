import React from "react"
import {Loader2} from "lucide-react"

interface Props {
    isLoading: boolean
    children: React.ReactNode
}

export const LoadingSpinner: React.FC<Props> = ({isLoading, children}) => {
    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center" aria-label="Cargando...">
                <Loader2 className="h-12 w-12 animate-spin text-amber-700"/>
            </div>
        )
    }
    return <>{children}</>
}
