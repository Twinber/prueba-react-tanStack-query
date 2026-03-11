import React from "react"
import {Button} from "@/components/ui/button"
import {useT} from "@/i18n/useT"
import {MapPin} from "lucide-react"

interface Props {
    latitude: number
    longitude: number
}

export const GmapsButton: React.FC<Props> = ({latitude, longitude}) => {
    const {t} = useT()

    return (
        <Button asChild>
            <a target='_blank' rel='noopener noreferrer' href={`https://www.google.com/maps/place/${latitude},${longitude}`}>
                <MapPin aria-hidden="true" />
                {t('show_in_gmaps')}
            </a>
        </Button>
    )
}
