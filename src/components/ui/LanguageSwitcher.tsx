import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div className="flex justify-end text-right gap-1 items-center">
            <button
                className="cursor-pointer hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                onClick={() => handleLanguageChange('en')}
                aria-label="Switch to English"
            >
                EN
            </button>
            <span aria-hidden="true">/</span>
            <button
                className="cursor-pointer hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                onClick={() => handleLanguageChange('es')}
                aria-label="Switch to Spanish"
            >
                ES
            </button>
        </div>
    )
}
