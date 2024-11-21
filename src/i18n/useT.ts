import {useTranslation} from "react-i18next"
import "@/i18n/i18next.ts"

export const useT = () => {
    const {t} = useTranslation()
    return {t}
}