import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const currentLang = i18n.resolvedLanguage || i18n.language || ''

    return (
        <div className="flex items-center justify-end text-right">
            <button
                type="button"
                aria-pressed={currentLang.startsWith('en')}
                aria-label="Switch to English"
                className="cursor-pointer rounded-sm px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
                onClick={() => handleLanguageChange('en')}
            >
                EN
            </button>
            <span aria-hidden="true" className="mx-1">/</span>
            <button
                type="button"
                aria-pressed={currentLang.startsWith('es')}
                aria-label="Switch to Spanish"
                className="cursor-pointer rounded-sm px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
                onClick={() => handleLanguageChange('es')}
            >
                ES
            </button>
        </div>
    )
}
