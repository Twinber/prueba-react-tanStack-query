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
                aria-label="Switch to English"
                className="cursor-pointer font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded px-1"
                onClick={() => handleLanguageChange('en')}
            >
                EN
            </button>
            <span aria-hidden="true">/</span>
            <button
                aria-label="Cambiar a Español"
                className="cursor-pointer font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded px-1"
                onClick={() => handleLanguageChange('es')}
            >
                ES
            </button>
        </div>
    )
}
