import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const currentLang = i18n.resolvedLanguage || i18n.language

    return (
        <div
            className="flex justify-end items-center text-right gap-1"
            role="group"
            aria-label="Language selection"
        >
            <button
                type="button"
                className={`font-medium transition-colors hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 rounded-sm px-1 ${currentLang === 'en' ? 'text-zinc-900 underline' : 'text-zinc-500'}`}
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLang === 'en'}
            >
                EN
            </button>
            <span aria-hidden="true" className="text-zinc-400 select-none">/</span>
            <button
                type="button"
                className={`font-medium transition-colors hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 rounded-sm px-1 ${currentLang === 'es' ? 'text-zinc-900 underline' : 'text-zinc-500'}`}
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLang === 'es'}
            >
                ES
            </button>
        </div>
    )
}
