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
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search_stations')}
            className="mb-4 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:ring-zinc-300"
        />
    )
}

export default StationSearch
