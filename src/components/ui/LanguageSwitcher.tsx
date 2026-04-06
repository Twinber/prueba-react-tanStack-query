import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const currentLanguage = i18n.resolvedLanguage || i18n.language

    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div className="flex justify-end text-right items-center gap-1" role="group" aria-label="Language switcher">
            <button
                type="button"
                className="cursor-pointer font-medium hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 rounded-sm px-1"
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLanguage === 'en'}
                aria-label="Switch to English"
            >
                EN
            </button>
            <span aria-hidden="true" className="text-muted-foreground select-none">/</span>
            <button
                type="button"
                className="cursor-pointer font-medium hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 rounded-sm px-1"
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLanguage === 'es'}
                aria-label="Switch to Spanish"
            >
                ES
            </button>
        </div>
    )
}
