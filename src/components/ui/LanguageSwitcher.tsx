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
                className="cursor-pointer hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-1"
                aria-label="Switch language to English"
                onClick={() => handleLanguageChange('en')}
            >
                EN
            </button>
            <span aria-hidden="true">/</span>
            <button
                className="cursor-pointer hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-1"
                aria-label="Switch language to Spanish"
                onClick={() => handleLanguageChange('es')}
            >
                ES
            </button>
        </div>
    )
}
