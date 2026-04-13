import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const currentLang = i18n.resolvedLanguage || i18n.language

    return (
        <div className="flex justify-end text-right" role="group" aria-label="Language selection">
            <button
                className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLang === 'en'}
            >
                EN
            </button>
            <span className="mx-1" aria-hidden="true">/</span>
            <button
                className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLang === 'es'}
            >
                ES
            </button>
        </div>
    )
}
