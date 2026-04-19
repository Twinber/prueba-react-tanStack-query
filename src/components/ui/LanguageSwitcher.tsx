import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const currentLang = i18n.resolvedLanguage || i18n.language

    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div
            className="flex justify-end text-right items-center gap-1"
            role="group"
            aria-label="Language selection"
        >
            <button
                className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 rounded px-1"
                onClick={() => handleLanguageChange('en')}
                aria-label="Switch to English"
                aria-pressed={currentLang === 'en'}
            >
                EN
            </button>
            <span aria-hidden="true" className="select-none">/</span>
            <button
                className="cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 rounded px-1"
                onClick={() => handleLanguageChange('es')}
                aria-label="Cambiar a Español"
                aria-pressed={currentLang === 'es'}
            >
                ES
            </button>
        </div>
    )
}
