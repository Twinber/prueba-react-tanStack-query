import {useEffect, useRef} from "react"

export const usePageTitle = (title?: string) => {
    const previousTitle = useRef(document.title)

    useEffect(() => {
        const previous = previousTitle.current
        if (title) {
            document.title = title
        }
        return () => {
            document.title = previous
        }
    }, [title])
}