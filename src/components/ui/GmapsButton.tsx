import React from "react"
import {Button} from "@/components/ui/button"
import {useT} from "@/i18n/useT"

interface Props {
    latitude: number
    longitude: number
}

export const GmapsButton: React.FC<Props> = ({latitude, longitude}) => {
    const {t} = useT()

    return (
        <a target='_blank' rel="noopener noreferrer" href={`https://www.google.com/maps/place/${latitude},${longitude}`}>
            <Button>{t('show_in_gmaps')}</Button>
        </a>
    )
}