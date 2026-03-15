import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div className="flex justify-end text-right items-center gap-1">
            <button
                className="cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-sm"
                onClick={() => handleLanguageChange('en')}
                aria-label="Switch to English"
            >
                EN
            </button>
            <span aria-hidden="true">/</span>
            <button
                className="cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-sm"
                onClick={() => handleLanguageChange('es')}
                aria-label="Cambiar a Español"
            >
                ES
            </button>
        </div>
    )
}
