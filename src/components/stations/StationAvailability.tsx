import React from "react"
import {Station} from "@/interfaces/networkData"
import {useT} from "@/i18n/useT"

interface Props {
    station: Station
}

export const StationAvailability: React.FC<Props> = ({station}) => {
    const {t} = useT();

    const availability = station.free_bikes / station.empty_slots;

    return (
        <div>
            {availability < 0.3 &&
                <span>{t('availability')}: <span className='text-red-600'>{t('low')}</span></span>}
            {availability >= 0.3 && availability < 0.6 &&
                <span>{t('availability')}: <span className='text-yellow-600'>{t('medium')}</span></span>}
            {availability >= 0.6 &&
                <span>{t('availability')}: <span className='text-green-600'>{t('high')}</span></span>}

        </div>
    )
}