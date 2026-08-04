import React from "react"
import {Button} from "@/components/ui/button"
import {useT} from "@/i18n/useT"

interface Props {
    latitude?: unknown
    longitude?: unknown
}

const isValidCoord = (value: unknown): value is number =>
    typeof value === "number" && Number.isFinite(value)

export const GmapsButton: React.FC<Props> = ({latitude, longitude}) => {
    const {t} = useT()

    if (!isValidCoord(latitude) || !isValidCoord(longitude)) {
        return (
            <Button disabled>{t('show_in_gmaps')}</Button>
        )
    }

    return (
        <a
            target='_blank'
            rel='noopener noreferrer'
            href={`https://www.google.com/maps/place/${latitude},${longitude}`}
            aria-label={t('show_in_gmaps')}
        >
            <Button>{t('show_in_gmaps')}</Button>
        </a>
    )
}