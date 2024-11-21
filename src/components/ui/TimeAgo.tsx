import React, {useEffect, useState} from "react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import "dayjs/locale/es"
import "dayjs/locale/en"
import {useT} from "@/i18n/useT.ts"
import i18n from "i18next"

dayjs.extend(relativeTime)

interface Props {
    timestamp: string
}

export const TimeAgo: React.FC<Props> = ({timestamp}) => {
    const {t} = useT()
    const lastUpdatedRelative = (timestamp: string) => dayjs(timestamp).fromNow()

    const [timeAgo, setTimeAgo] = useState<string>(lastUpdatedRelative(timestamp))
    useEffect(() => {
        const currentLang = i18n.language
        dayjs.locale(currentLang)
        setTimeAgo(lastUpdatedRelative(timestamp))
    }, [i18n.language])


    return (
        <div>
            <span>{t('updated')} {timeAgo}</span>
        </div>
    )
}