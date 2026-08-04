import React from "react"
import {Station} from "@/interfaces/networkData"
import {useT} from "@/i18n/useT"

interface Props {
    station: Station
}

export const StationAvailability: React.FC<Props> = ({station}) => {
    const {t} = useT();

    const {free_bikes, empty_slots, extra} = station;

    const emptySlots = empty_slots != null ? empty_slots : null;
    const canComputeRatio = emptySlots != null && Number.isFinite(emptySlots) && emptySlots > 0;

    let band: 'low' | 'medium' | 'high' | null = null;

    if (canComputeRatio) {
        const ratio = free_bikes / emptySlots;
        band = ratio < 0.3 ? 'low' : ratio < 0.6 ? 'medium' : 'high';
    } else if (free_bikes === 0) {
        band = 'low';
    } else if (extra && typeof extra.slots === 'number' && extra.slots > 0) {
        const ratio = free_bikes / extra.slots;
        band = ratio < 0.3 ? 'low' : ratio < 0.6 ? 'medium' : 'high';
    }

    return (
        <div>
            {band === 'low' &&
                <span>{t('availability')}: <span className='text-red-600'>{t('low')}</span></span>}
            {band === 'medium' &&
                <span>{t('availability')}: <span className='text-yellow-600'>{t('medium')}</span></span>}
            {band === 'high' &&
                <span>{t('availability')}: <span className='text-green-600'>{t('high')}</span></span>}
            {band === null &&
                <span>{t('availability')}: {free_bikes}/{emptySlots ?? 0}</span>}

        </div>
    )
}