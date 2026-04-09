import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div className="flex justify-end text-right" role="group" aria-label="Language switcher">
            <button
                className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
                onClick={() => handleLanguageChange('en')}
                aria-pressed={(i18n.resolvedLanguage || i18n.language) === 'en'}
            >
                EN
            </button>
            <span aria-hidden="true" className="mx-1">/</span>
            <button
                className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
                onClick={() => handleLanguageChange('es')}
                aria-pressed={(i18n.resolvedLanguage || i18n.language) === 'es'}
            >
                ES
            </button>
        </div>
    )
}
