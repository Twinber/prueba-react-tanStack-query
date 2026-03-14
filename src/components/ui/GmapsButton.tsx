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
        <Button asChild>
            <a
                target='_blank'
                rel='noreferrer'
                href={`https://www.google.com/maps/place/${latitude},${longitude}`}
            >
                {t('show_in_gmaps')}
            </a>
        </Button>
    )
}