import React, {useEffect, useState} from "react"
import {useT} from "@/i18n/useT"

interface Props {
    onSearch: (query: string) => void
}

const StationSearch: React.FC<Props> = ({onSearch}) => {
    const {t} = useT()
    const [query, setQuery] = useState("")

    useEffect(() => {
        const timer = setTimeout(() => onSearch(query), 300)
        return () => clearTimeout(timer)
    }, [query, onSearch])

    return (
        <div className="relative mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('search_stations')}
                className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 pr-9 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:ring-zinc-300"
            />
            {query && (
                <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label={t('clear_search')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 8.586L5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10l4.293-4.293a1 1 0 0 0-1.414-1.414L10 8.586z" clipRule="evenodd" />
                    </svg>
                </button>
            )}
        </div>
    )
}

export default StationSearch
