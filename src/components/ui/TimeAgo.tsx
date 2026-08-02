import React from "react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import "dayjs/locale/es"
import "dayjs/locale/en"
import {useT} from "@/i18n/useT.ts"
import i18n from "i18next"

dayjs.extend(relativeTime)

const DAYS_THRESHOLD = 7

interface Props {
    timestamp: string
}

export const TimeAgo: React.FC<Props> = ({timestamp}) => {
    const {t} = useT()

    const formatTimestamp = (timestamp: string): string => {
        const date = dayjs(timestamp)
        const daysSince = dayjs().diff(date, 'day')
        if (daysSince > DAYS_THRESHOLD) {
            return t('days_ago', {count: daysSince})
        }
        return date.locale(i18n.language).fromNow()
    }

    return (
        <div>
            <span>{t('updated')} {formatTimestamp(timestamp)}</span>
        </div>
    )
}